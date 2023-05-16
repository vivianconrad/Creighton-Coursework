var menu = window.menu || {},
    business_paypal = ''; // aquí va tu correo electrónico de paypal

(function($) {
    'use strict';

    //no coflict con underscores

    menu.init = function() {
        //totalItems totalAmount
        var total = 0,
            items = 0

        var cart = (JSON.parse(localStorage.getItem('cart')) != null) ? JSON.parse(localStorage.getItem('cart')) : { items: [] };

        if (undefined != cart.items && cart.items != null && cart.items != '' && cart.items.length > 0) {
            _.forEach(cart.items, function(n, key) {
                items = (items + n.cant)
                total = total + (n.cant * n.price)
            });

        }

        $('#totalItems').text(items)
        $('.totalAmount').text('$ ' + total + ' USD')

    }

    menu.createProducts = function() {
        var menuItems = [{
                    id: 1,
                    img: 'http://libertadproof.com/wp-content/uploads/2016/02/87952_Obv.jpg',
                    name: 'Libertad 5oz',
                    price: 299.00,
                    desc: 'Libertad 5oz BU 1998 Contains 1 Libertad 5oz BU brilliant uncirculated .999 fine Silver. In capsule The same coin as you see in this picture. We only Ship to the US, and is FREE Shipping Shipping time 5-7 business days via UPS express with tracking and insurance. Payments only via Paypal.',
                    stock: 4
                },
                {
                    id: 2,
                    name: 'Libertad 5oz',
                    img: 'http://libertadproof.com/wp-content/uploads/2016/02/87952_Obv.jpg',
                    price: 199.00,
                    desc: 'Libertad 5oz BU 1998 Contains 1 Libertad 5oz BU brilliant uncirculated .999 fine Silver. In capsule The same coin as you see in this picture. We only Ship to the US, and is FREE Shipping Shipping time 5-7 business days via UPS express with tracking and insurance. Payments only via Paypal.',
                    stock: 2
                },
                {
                    id: 3,
                    name: 'Libertad 5oz',
                    img: 'http://libertadproof.com/wp-content/uploads/2016/02/87952_Obv.jpg',
                    price: 99.00,
                    desc: 'Libertad 5oz BU 1998 Contains 1 Libertad 5oz BU brilliant uncirculated .999 fine Silver. In capsule The same coin as you see in this picture. We only Ship to the US, and is FREE Shipping Shipping time 5-7 business days via UPS express with tracking and insurance. Payments only via Paypal.',
                    stock: 1
                },
                {
                    id: 4,
                    name: 'Libertad 5oz',
                    img: 'http://libertadproof.com/wp-content/uploads/2016/02/87952_Obv.jpg',
                    price: 80.00,
                    desc: 'Libertad 5oz BU 1998 Contains 1 Libertad 5oz BU brilliant uncirculated .999 fine Silver. In capsule The same coin as you see in this picture. We only Ship to the US, and is FREE Shipping Shipping time 5-7 business days via UPS express with tracking and insurance. Payments only via Paypal.',
                    stock: 0
                }
            ],
            wrapper = $('.menuItemWrapper'),
            contents = ''

        for (var i = 0; i < menuItems.length; i++) {

            if (menuItems[i].stock > 0) {

                // contents += `<div class="card">`
                contents += `		<h1 class="card--title"> ${menuItems[i].name} </h1>`
                contents += `		<img class="card--avatar" src="${menuItems[i].img}" alt=" an image of ${menuItems[i].name}">`
                    // contents += `       <h3> ${menuItems[i].price} - ${menuItems[i].desc}  `
                    // contents += `       <a class = "card--link btn submit ladda-button prod-"${menuItems[i].id}" data - style = "slide-right" onclick = "menu.addtoCart(${menuItems[i].id});"> Add to Cart </a>`
                    // contents += `</div>`

            }

        }

        wrapper.html(contents)

        localStorage.setItem('menuItems', JSON.stringify(menuItems))
    }

    menu.addtoCart = function(id) {
        var l = Ladda.create(document.querySelector('.prod-' + id));

        l.start();
        var menuItems = JSON.parse(localStorage.getItem('menuItems')),
            item = _.find(menuItems, { 'id': id }),
            cant = 1
        if (cant <= item.stock) {
            if (undefined != item) {
                if (cant > 0) {
                    setTimeout(function() {
                        var cart = (JSON.parse(localStorage.getItem('cart')) != null) ? JSON.parse(localStorage.getItem('cart')) : { items: [] };
                        menu.searchProd(cart, item.id, parseInt(cant), item.name, item.price, item.img, item.stock)
                        l.stop();
                    }, 2000)
                } else {
                    alert('Solo se permiten cantidades mayores a cero')
                }
            } else {
                alert('Oops! algo malo ocurrió, inténtalo de nuevo más tarde')
            }
        } else {
            alert('No se pueden añadir más de este item')
        }
    }

    menu.searchProd = function(cart, id, cant, name, price, img, available) {
        //si le pasamos un valor negativo a la cantidad, se descuenta del carrito
        var curProd = _.find(cart.items, { 'id': id })

        if (undefined != curProd && curProd != null) {
            //ya existe el item, aÃ±adimos uno mÃ¡s a su cantidad
            if (curProd.cant < available) {
                curProd.cant = parseInt(curProd.cant + cant)
            } else {
                alert('No se pueden añadir más de este item')
            }

        } else {
            //sino existe lo agregamos al carrito
            var prod = {
                id: id,
                cant: cant,
                name: name,
                price: price,
                img: img,
                available: available
            }
            cart.items.push(prod)

        }
        localStorage.setItem('cart', JSON.stringify(cart))
        menu.init()
        menu.getProducts()
        menu.updatePayForm()
    }

    menu.getProducts = function() {
        var cart = (JSON.parse(localStorage.getItem('cart')) != null) ? JSON.parse(localStorage.getItem('cart')) : { items: [] },
            msg = '',
            wrapper = $('.cart'),
            total = 0
        wrapper.html('')

        if (undefined == cart || null == cart || cart == '' || cart.items.length == 0) {
            wrapper.html('<li>Tu canasta está vacía</li>');
            $('.cart').css('left', '-400%')
        } else {
            var items = '';
            _.forEach(cart.items, function(n, key) {

                total = total + (n.cant * n.price)
                items += '<li>'
                items += '<img src="' + n.img + '" />'
                items += '<h3 class="title">' + n.name + '<br><span class="price">' + n.cant + ' x $ ' + n.price + ' USD</span> <button class="add" onclick="menu.updateItem(' + n.id + ',' + n.available + ')"><i class="icon ion-minus-circled"></i></button> <button onclick="menu.deleteProd(' + n.id + ')" ><i class="icon ion-close-circled"></i></button><div class="clearfix"></div></h3>'
                items += '</li>'
            });

            //agregar el total al carrito
            items += '<li id="total">Total : $ ' + total + ' USD <div id="submitForm"></div></li>'
            wrapper.html(items)
            $('.cart').css('left', '-500%')
        }
    }

    menu.updateItem = function(id, available) {
        //resta uno a la cantidad del carrito de compras
        var cart = (JSON.parse(localStorage.getItem('cart')) != null) ? JSON.parse(localStorage.getItem('cart')) : { items: [] },
            curProd = _.find(cart.items, { 'id': id })
            //actualizar el carrito
        curProd.cant = curProd.cant - 1;
        //validar que la cantidad no sea menor a 0
        if (curProd.cant > 0) {
            localStorage.setItem('cart', JSON.stringify(cart))
            menu.init()
            menu.getProducts()
            menu.updatePayForm()
        } else {
            menu.deleteProd(id, true)
        }
    }

    menu.delete = function(id) {
        var cart = (JSON.parse(localStorage.getItem('cart')) != null) ? JSON.parse(localStorage.getItem('cart')) : { items: [] };
        var curProd = _.find(cart.items, { 'id': id })
        _.remove(cart.items, curProd);
        localStorage.setItem('cart', JSON.stringify(cart))
        menu.init()
        menu.getProducts()
        menu.updatePayForm()
    }

    menu.deleteProd = function(id, remove) {
        if (undefined != id && id > 0) {

            if (remove == true) {
                menu.delete(id)
            } else {
                var conf = confirm('¿Deseas eliminar este item?')
                if (conf) {
                    menu.delete(id)
                }
            }

        }
    }

    menu.updatePayForm = function() {
        //eso va a generar un formulario dinamico para paypal
        //con los menuItems y sus precios
        var cart = (JSON.parse(localStorage.getItem('cart')) != null) ? JSON.parse(localStorage.getItem('cart')) : { items: [] };
        var statics = '<form action="https://www.paypal.com/cgi-bin/webscr" method="post"><input type="hidden" name="cmd" value="_cart"><input type="hidden" name="upload" value="1"><input type="hidden" name="currency_code" value="USD" /><input type="hidden" name="business" value="' + business_paypal + '">',
            dinamic = '',
            wrapper = $('#submitForm')

        wrapper.html('')

        if (undefined != cart && null != cart && cart != '') {
            var i = 1;
            _.forEach(cart.items, function(prod, key) {
                dinamic += '<input type="hidden" name="item_name_' + i + '" value="' + prod.name + '">'
                dinamic += '<input type="hidden" name="amount_' + i + '" value="' + prod.price + '">'
                dinamic += '<input type="hidden" name="item_number_' + i + '" value="' + prod.id + '" />'
                dinamic += '<input type="hidden" name="quantity_' + i + '" value="' + prod.cant + '" />'
                i++;
            })

            statics += dinamic + '<button type="submit" class="pay">Pagar &nbsp;<i class="ion-chevron-right"></i></button></form>'

            wrapper.html(statics)
        }
    }

    $(document).ready(function() {
        menu.init()
        menu.getProducts()
        menu.updatePayForm()
        menu.createProducts()
    })

})(jQuery)