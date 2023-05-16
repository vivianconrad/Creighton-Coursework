var menu = window.menu || {},
    business_paypal = ''; // aquí va tu correo electrónico de paypal

(function($) {
    'use strict';

    //no coflict con underscores

    menu.init = function() {
        //totalItems totalAmount
        var total = 0,
            items = 0

        var order = (JSON.parse(localStorage.getItem('order')) != null) ? JSON.parse(localStorage.getItem('order')) : { items: [] };

        if (undefined != order.items && order.items != null && order.items != '' && order.items.length > 0) {
            _.forEach(order.items, function(n, key) {
                items = (items + n.cant)
                total = total + (n.cant * n.price)
            });

        }

        $('#totalItems').text(items)
        $('.totalAmount').text('$ ' + total + ' USD')

    }

    menu.createMeal = function() {
        var menuItems = [{
                    id: 1,
                    img: '../images/nachos.jpg',
                    name: 'Classic Nachos',
                    price: 4.99,
                    desc: 'Have some tasty nachos',
                    page: 'classicNachos.html',
                    stock: 4
                },
                {
                    id: 2,
                    img: '../images/chili-cheese-nacho.jpg',
                    name: 'Loaded Nachos',
                    price: 4.99,
                    desc: 'Have some tasty nachos',
                    page: 'classicNachos.html',
                    stock: 4
                },
                {
                    id: 3,
                    img: '../images/taco.jpg',
                    name: 'Tacos',
                    price: 4.99,
                    desc: 'Have some tasty nachos',
                    page: 'classicNachos.html',
                    stock: 4
                },
                {
                    id: 4,
                    img: '../images/burrito.jpg',
                    name: 'Burrito',
                    price: 4.99,
                    desc: 'A large flour tortilla stuffed with your favorite filling, rolled and smothered with red, green, or white, enchilada sauce and topped with cheese.',
                    page: 'classicNachos.html',
                    stock: 4
                },
            ],
            wrapper = $('.container'),
            contents = ''

        for (var i = 0; i < menuItems.length; i++) {



            contents += `<div class="card">`
            contents += `		<h3 class="card--title"> ${menuItems[i].name} </h3>`
            contents += `		<a href="${menuItems[i].page}"> <img class="card--avatar" src="${menuItems[i].img}" alt=" an image of ${menuItems[i].name}"> </a>`
            contents += `       <span class="product-details">`
            contents += `           <p> ${menuItems[i].desc} </p>`
            contents += `       </span>`
            contents += `		<a class="large-12 columns btn submit ladda-button food-${menuItems[i].id}" data-style="slide-right" onclick="menu.addtoCart(${menuItems[i].id});">Add to Cart for $${menuItems[i].price}</a>`
            contents += '</div>'
        }

        wrapper.html(contents)

        localStorage.setItem('menuItems', JSON.stringify(menuItems))
    }

    menu.addtoCart = function(id) {
        var addedItem = Ladda.create(document.querySelector('.food-' + id));

        addedItem.start();
        var menuItems = JSON.parse(localStorage.getItem('menuItems')),
            mItem = _.find(menuItems, { 'id': id }),
            cant = 1
        if (cant <= mItem.stock) {
            if (undefined != mItem) {
                if (cant > 0) {
                    setTimeout(function() {
                        var order = (JSON.parse(localStorage.getItem('order')) != null) ? JSON.parse(localStorage.getItem('order')) : { items: [] };
                        menu.searchMeal(order, mItem.id, parseInt(cant), mItem.name, mItem.price, mItem.img, mItem.stock)
                        addedItem.stop();
                    }, 2000)
                } else {
                    alert('Solo se permiten cantidades mayores a cero')
                }
            } else {
                alert('Oops! algo malo ocurrió, inténtalo de nuevo más tarde')
            }
        } else {
            alert('No se pueden añadir más de este mItem')
        }
    }

    menu.searchMeal = function(order, id, cant, name, price, img, available) {
        //si le pasamos un valor negativo a la cantidad, se descuenta del carrito
        var curMeal = _.find(order.items, { 'id': id })

        if (undefined != curMeal && curMeal != null) {
            //ya existe el mItem, aÃ±adimos uno mÃ¡s a su cantidad
            if (curMeal.cant < available) {
                curMeal.cant = parseInt(curMeal.cant + cant)
            } else {
                alert('No se pueden añadir más de este mItem')
            }

        } else {
            //sino existe lo agregamos al carrito
            var food = {
                id: id,
                cant: cant,
                name: name,
                price: price,
                img: img,
                available: available
            }
            order.items.push(food)

        }
        localStorage.setItem('order', JSON.stringify(order))
        menu.init()
        menu.getMeal()
        menu.placingFoodOrder()
    }

    menu.getMeal = function() {
        var order = (JSON.parse(localStorage.getItem('order')) != null) ? JSON.parse(localStorage.getItem('order')) : { items: [] },
            msg = '',
            wrapper = $('.order'),
            total = 0
        wrapper.html('')

        if (undefined == order || null == order || order == '' || order.items.length == 0) {
            wrapper.html('<li>Your Cart is Empty!</li>');
            $('.order').css('left', '-400%')
        } else {
            var items = '';
            _.forEach(order.items, function(n, key) {

                total = total + (n.cant * n.price)
                items += '<li>'
                items += '<img src="' + n.img + '" />'
                items += '<h3 class="title">' + n.name + '<br><span class="price">' + n.cant + ' x $ ' + n.price + ' USD</span> <button class="add" onclick="menu.updateItem(' + n.id + ',' + n.available + ')"><i class="icon ion-minus-circled"></i></button> <button onclick="menu.deleteMeal(' + n.id + ')" ><i class="icon ion-close-circled"></i></button><div class="clearfix"></div></h3>'
                items += '</li>'
            });

            //agregar el total al carrito
            items += '<li id="total">Total : $ ' + total + ' USD <div id="submitForm"></div></li>'
            wrapper.html(items)
            $('.order').css('left', '-500%')
        }
    }

    menu.updateItem = function(id, available) {
        //resta uno a la cantidad del carrito de compras
        var order = (JSON.parse(localStorage.getItem('order')) != null) ? JSON.parse(localStorage.getItem('order')) : { items: [] },
            curMeal = _.find(order.items, { 'id': id })
            //actualizar el carrito
        curMeal.cant = curMeal.cant - 1;
        //validar que la cantidad no sea menor a 0
        if (curMeal.cant > 0) {
            localStorage.setItem('order', JSON.stringify(order))
            menu.init()
            menu.getMeal()
            menu.placingFoodOrder()
        } else {
            menu.deleteMeal(id, true)
        }
    }

    menu.delete = function(id) {
        var order = (JSON.parse(localStorage.getItem('order')) != null) ? JSON.parse(localStorage.getItem('order')) : { items: [] };
        var curMeal = _.find(order.items, { 'id': id })
        _.remove(order.items, curMeal);
        localStorage.setItem('order', JSON.stringify(order))
        menu.init()
        menu.getMeal()
        menu.placingFoodOrder()
    }

    menu.deleteMeal = function(id, remove) {
        if (undefined != id && id > 0) {

            if (remove == true) {
                menu.delete(id)
            } else {
                var conf = confirm('¿Deseas eliminar este mItem?')
                if (conf) {
                    menu.delete(id)
                }
            }

        }
    }

    menu.placingFoodOrder = function() {
        //eso va a generar un formulario dinamico para paypal
        //con los menuItems y sus precios
        var order = (JSON.parse(localStorage.getItem('order')) != null) ? JSON.parse(localStorage.getItem('order')) : { items: [] };
        var orderForm = '<form action="https://www.paypal.com/cgi-bin/webscr" method="post"><input type="hidden" name="cmd" value="_cart"><input type="hidden" name="upload" value="1"><input type="hidden" name="currency_code" value="USD" /><input type="hidden" name="business" value="' + business_paypal + '">',
            dynamic = '',
            wrapper = $('#submitForm')

        wrapper.html('')

        if (undefined != order && null != order && order != '') {
            var i = 1;
            _.forEach(order.items, function(food, key) {
                dynamic += '<input type="hidden" name="item_name_' + i + '" value="' + food.name + '">'
                dynamic += '<input type="hidden" name="amount_' + i + '" value="' + food.price + '">'
                dynamic += '<input type="hidden" name="item_number_' + i + '" value="' + food.id + '" />'
                dynamic += '<input type="hidden" name="quantity_' + i + '" value="' + food.cant + '" />'
                i++;
            })

            orderForm += dynamic + '<button type="submit" class="pay">Pay &nbsp;<i class="ion-chevron-right"></i></button></form>'

            wrapper.html(orderForm)
        }
    }

    $(document).ready(function() {
        menu.init()
        menu.getMeal()
        menu.placingFoodOrder()
        menu.createMeal()
    })

})(jQuery)