var menu = window.menu || {},
    business_paypal = '';

/* This is a function that is called when the document is ready. It is calling the `menu.init`,
`menu.getProducts`, `menu.updatePayForm`, and `menu.createProducts` functions. */
(function($) {
    'use strict';

    menu.init = function() {
        //totalItems totalAmount
        var total = 0,
            items = 0

        var cart = (JSON.parse(localStorage.getItem('cart')) != null) ? JSON.parse(localStorage.getItem('cart')) : { items: [] };

        if (undefined != cart.items && cart.items != null && cart.items != '' && cart.items.length > 0) {
            _.forEach(cart.items, function(n, key) {
                items = (items + n.count)
                total = total + (n.count * n.price)
            });

        }

        $('#totalItems').text(items)
        $('.totalAmount').text('$ ' + total + ' USD')

    }

    /* Creating a menu of items that can be added to the cart. */
    menu.createProducts = function() {
        var menuItems = [{
                    id: 1,
                    img: 'images/nachos.jpg',
                    name: 'Classic Nachos',
                    price: 4.99,
                    desc: 'Have some tasty nachos',
                    page: 'classicNachos.html',
                    stock: 4
                },
                {
                    id: 2,
                    img: 'images/chili-cheese-nacho.jpg',
                    name: 'Loaded Nachos',
                    price: 4.99,
                    desc: 'Have some tasty nachos',
                    page: 'classicNachos.html',
                    stock: 4
                },
                {
                    id: 3,
                    img: 'images/taco.jpg',
                    name: 'Tacos',
                    price: 4.99,
                    desc: 'Have some tasty nachos',
                    page: 'classicNachos.html',
                    stock: 4
                },
                {
                    id: 4,
                    img: 'images/burrito.jpg',
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
            contents += `		<h1 class="card--title"> ${menuItems[i].name} </h1>`
            contents += `		<a href="${menuItems[i].page}"> <img class="card--avatar" src="${menuItems[i].img}" alt=" an image of ${menuItems[i].name}"> </a>`
                // contents += `       <span class="product-details">`
                // contents += `           <p> $${ menuItems[i].price} - ${menuItems[i].desc} </p>`
                // contents += `       </span>`
            contents += `       <a class = "card--link btn submit ladda-button prod-"${menuItems[i].id}" data - style = "slide-right" onclick = "menu.addtoCart(${menuItems[i].id});"> Add to Cart </a>`
            contents += ` </div>`



        }

        wrapper.html(contents)

        localStorage.setItem('menuItems', JSON.stringify(menuItems))
    }

    /* This function is adding the item to the cart. */
    menu.addtoCart = function(id) {
        var l = Ladda.create(document.querySelector('.prod-' + id));

        l.start();
        var menuItems = JSON.parse(localStorage.getItem('menuItems')),
            item = _.find(menuItems, { 'id': id }),
            count = 1
        if (count <= item.stock) {
            if (undefined != item) {
                if (count > 0) {
                    setTimeout(function() {
                        var cart = (JSON.parse(localStorage.getItem('cart')) != null) ? JSON.parse(localStorage.getItem('cart')) : { items: [] };
                        menu.searchProd(cart, item.id, parseInt(count), item.name, item.price, item.img, item.stock)
                        l.stop();
                    }, 2000)
                } else {
                    alert('Only counts greater than zero are allowed')
                }
            } else {
                alert('oops! something bad happened, please try again later')
            }
        } else {
            alert('No more of this item can be added')
        }
    }

    /* This function is searching for the product in the cart. If the product is found, it will add the
    current product count to the count. If it is not, it will create a new object called `prod` and
    adding it to the `cart.items` array. */
    menu.searchProd = function(cart, id, count, name, price, img, available) {
        var curProd = _.find(cart.items, { 'id': id })

        if (undefined != curProd && curProd != null) {
            /* This is checking if the current product count is less than the available amount. If it
            is, it will add the current product count to the count. If it is not, it will alert the
            user that no more of this item can be added. */
            if (curProd.count < available) {
                curProd.count = parseInt(curProd.count + count)
            } else {
                alert('No more of this item can be added')
            }

        } else {
            /* This is creating a new object called `prod` and adding it to the `cart.items` array. */
            var prod = {
                id: id,
                count: count,
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

    /* This function is getting the products from the cart. */
    menu.getProducts = function() {
        var cart = (JSON.parse(localStorage.getItem('cart')) != null) ? JSON.parse(localStorage.getItem('cart')) : { items: [] },
            msg = '',
            wrapper = $('.cart'),
            total = 0
        wrapper.html('')

        if (undefined == cart || null == cart || cart == '' || cart.items.length == 0) {
            wrapper.html('<li>your cart is empty</li>');
            $('.cart').css('left', '-400%')
        } else {
            var items = '';
            _.forEach(cart.items, function(n, key) {

                total = total + (n.count * n.price)
                items += `<li>`
                items += `<img src="${n[i].img}" />`
                items += `<h3 class="title"> ${n[i].name} <br><span class="price">' ${n[i].count} x $ ${n[i].price}USD</span> <button class="add" onclick="menu.updateItem(${n[i].id}, ${n[i].available})"><i class="icon ion-minus-circled"></i></button> <button onclick="menu.deleteProd(${n[i].id})" ><i class="icon ion-close-circled"></i></button><div class="clearfix"></div></h3>`
                items += `</li>`
            });

            /* This is adding the total to the cart. */
            items += '<li id="total">Total : $ ' + total + ' USD <div id="submitForm"></div></li>'
            wrapper.html(items)
            $('.cart').css('left', '-500%')
        }
    }

    menu.updateItem = function(id, available) {
        /* Checking if the cart is null, if it is, it will create a new cart with an empty array. */
        var cart = (JSON.parse(localStorage.getItem('cart')) != null) ? JSON.parse(localStorage.getItem('cart')) : { items: [] },
            curProd = _.find(cart.items, { 'id': id })
            /* Subtracting 1 from the current product count. */
        curProd.count = curProd.count - 1;
        /* This is a function that is called when the user clicks on the minus button. It is checking
        if the current product count is greater than 0. If it is, it will update the cart, and call
        the init, getProducts, and updatePayForm functions. */
        if (curProd.count > 0) {
            localStorage.setItem('cart', JSON.stringify(cart))
            menu.init()
            menu.getProducts()
            menu.updatePayForm()
        } else {
            /* Calling the `menu.deleteProd` function and passing in the `id` and `true` as parameters. */
            menu.deleteProd(id, true)
        }
    }

    /* Removing the item from the cart. */
    menu.delete = function(id) {
        var cart = (JSON.parse(localStorage.getItem('cart')) != null) ? JSON.parse(localStorage.getItem('cart')) : { items: [] };
        var curProd = _.find(cart.items, { 'id': id })
        _.remove(cart.items, curProd);
        localStorage.setItem('cart', JSON.stringify(cart))
        menu.init()
        menu.getProducts()
        menu.updatePayForm()
    }

    /* This function is deleting the item from the cart. */
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

    /* This function is creating the form that will be submitted to PayPal. */
    menu.updatePayForm = function() {
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
                dinamic += '<input type="hidden" name="quantity_' + i + '" value="' + prod.count + '" />'
                i++;
            })

            statics += dinamic + '<button type="submit" class="pay">Pagar &nbsp;<i class="ion-chevron-right"></i></button></form>'

            wrapper.html(statics)
        }
    }

    /* This is a jQuery function that is called when the document is ready. It is calling the
    `menu.init`, `menu.getProducts`, `menu.updatePayForm`, and `menu.createProducts` functions. */
    $(document).ready(function() {
        menu.init()
        menu.getProducts()
        menu.updatePayForm()
        menu.createProducts()
    })

})(jQuery)