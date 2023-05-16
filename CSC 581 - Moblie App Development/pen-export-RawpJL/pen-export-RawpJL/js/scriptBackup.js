var menu = window.menu || {},
    business_paypal = '';

(function($) {
    'use strict';
    /* This function is getting the total number of items in the cart and the total amount of the
    order. */
    menu.init = function() {
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

    /* Creating a menu of items that can be added to the cart. */
    menu.createMeal = function() {
        var menuItems = [{
                    id: 1,
                    img: 'images/nachos.jpg',
                    name: 'Classic Nachos',
                    mealType: 'appetizer',
                    price: 4.99,
                    desc: 'Have some tasty nachos',
                    page: 'classicNachos.html'
                },
                {
                    id: 2,
                    img: 'images/chili-cheese-nacho.jpg',
                    name: 'Loaded Nachos',
                    mealType: 'appetizer',
                    price: 4.99,
                    desc: 'Have some tasty nachos',
                    page: 'classicNachos.html'
                },
                {
                    id: 3,
                    img: 'images/taco.jpg',
                    name: 'Tacos (a la carte)',
                    mealType: 'entree',
                    price: 4.99,
                    desc: 'Have some tasty nachos',
                    page: 'classicNachos.html'
                },
                {
                    id: 4,
                    img: 'images/burrito.jpg',
                    name: 'Burrito',
                    mealType: 'entree',
                    price: 4.99,
                    desc: 'A large flour tored with red, green, or white, e.',
                    page: 'classicNachos.html'
                },
                {
                    id: 5,
                    img: 'images/huevosrancheros.jpg',
                    name: 'Huevos Rancheros',
                    mealType: 'breakfast',
                    price: 8.35,
                    desc: 'Two fresh ranch eggs on soft corn torillas',
                    page: 'classicNachos.html'
                },
                {
                    id: 6,
                    img: 'images/huevosrancheros.jpg',
                    name: 'Huevos Rancheros',
                    mealType: 'breakfast',
                    price: 8.35,
                    desc: 'Two fresh ranch eggs on soft corn torillas',
                    page: 'classicNachos.html'
                },
                {
                    id: 7,
                    img: 'images/huevosrancheros.jpg',
                    name: 'Huevos Rancheros',
                    mealType: 'breakfast',
                    price: 8.35,
                    desc: 'Two fresh ranch eggs on soft corn torillas',
                    page: 'classicNachos.html'
                },

            ],

            contents = '',

            appWrapper = $('.apps'),
            brekkieWrapper = $('.brekkie'),
            entreeWrapper = $('.entree')

        contents += `<h3 id='breakfast_link'>Breakkie</h3>`
        for (var i = 0; i < menuItems.length; i++) {
            if (menuItems[i].mealType == 'breakfast') {
                contents += `<div class="card">`
                contents += `		<h3 class="card--title"> ${menuItems[i].name} </h3>`
                contents += `		<a href="${menuItems[i].page}"> <img class="card--avatar" src="${menuItems[i].img}" alt=" an image of ${menuItems[i].name}"> </a>`
                contents += `       <span class="product-details">`
                contents += `           <p> ${menuItems[i].desc} </p>`
                contents += `       </span>`
                contents += `		<a class="large-12 columns btn submit ladda-button food-${menuItems[i].id}" data-style="slide-right" onclick="menu.addtoCart(${menuItems[i].id});">Add to Cart for $${menuItems[i].price}</a>`
                contents += '</div>'
            }
        }
        brekkieWrapper.html(contents);
        contents = '';

        contents += `<br><h3 id='breakfast_link'>lunch</h3>`
        for (var i = 0; i < menuItems.length; i++) {
            if (menuItems[i].mealType == 'entree') {
                contents += `<div class="card">`
                contents += `		<h3 class="card--title"> ${menuItems[i].name} </h3>`
                contents += `		<a href="${menuItems[i].page}"> <img class="card--avatar" src="${menuItems[i].img}" alt=" an image of ${menuItems[i].name}"> </a>`
                contents += `       <span class="product-details">`
                contents += `           <p> ${menuItems[i].desc} </p>`
                contents += `       </span>`
                contents += `		<a class="large-12 columns btn submit ladda-button food-${menuItems[i].id}" data-style="slide-right" onclick="menu.addtoCart(${menuItems[i].id});">Add to Cart for $${menuItems[i].price}</a>`
                contents += '</div>'
            }
        }
        entreeWrapper.html(contents);
        contents = '';

        // wrapper.html(contents)

        /* Saving the menu items to the local storage. */
        localStorage.setItem('menuItems', JSON.stringify(menuItems))
    }

    /* This function is adding the item to the cart. */
    menu.addtoCart = function(id) {
        var addedItem = Ladda.create(document.querySelector('.food-' + id));

        addedItem.start();
        var menuItems = JSON.parse(localStorage.getItem('menuItems')),
            mItem = _.find(menuItems, { 'id': id }),
            cant = 1

        setTimeout(function() {
            var order = (JSON.parse(localStorage.getItem('order')) != null) ? JSON.parse(localStorage.getItem('order')) : { items: [] };
            menu.searchMeal(order, mItem.id, parseInt(cant), mItem.name, mItem.price, mItem.img, mItem.stock)
            addedItem.stop();
        }, 2000)
    }

    /* A function that is called when the user clicks on the "Add to cart" button. It is adding the item to
    the cart. */
    menu.searchMeal = function(order, id, cant, name, price, img, available) {
        var curMeal = _.find(order.items, { 'id': id })

        /* This is checking if the item is already in the cart. If it is, it checks if the quantity is
        less than the available quantity. If it is, it adds the quantity to the cart. If it is not,
        it alerts the user that they cannot add more of that item. */
        if (undefined != curMeal && curMeal != null) {
            if (curMeal.cant < available) {
                curMeal.cant = parseInt(curMeal.cant + cant)
            } else {
                alert('You cannot add any more!')
            }

        } /* Adding the item to the cart. */
        else {
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
        /* The below code is setting the order to the local storage. */
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

        /* This is checking if the cart is empty. If it is, it displays a message to the user. If it is
        not, it displays the items in the cart. */
        if (undefined == order || null == order || order == '' || order.items.length == 0) {
            wrapper.html('<li>Your Cart is Empty!</li>');
            $('.order').css('left', '-400%')
        } else {
            /* This is adding the items to the cart. */
            var items = '';
            _.forEach(order.items, function(n, key) {

                total = total + (n.cant * n.price)
                items += '<li>'
                items += '<img src="' + n.img + '" />'
                items += '<h3 class="title">' + n.name + '<br><span class="price">' + n.cant + ' x $ ' + n.price + ' USD</span> <button class="add" onclick="menu.updateItem(' + n.id + ',' + n.available + ')"><i class="icon ion-minus-circled"></i></button> <button onclick="menu.deleteMeal(' + n.id + ')" ><i class="icon ion-close-circled"></i></button><div class="clearfix"></div></h3>'
                items += '</li>'
            });

            /* This is adding the total to the cart. */
            items += '<li id="total">Total : $ ' + total + ' USD <div id="submitForm"></div></li>'
            wrapper.html(items)
            $('.order').css('left', '-500%')
        }
    }

    menu.updateItem = function(id, available) {
        /* This is checking if the item is already in the cart. If it is, it checks if the quantity is less than the available quantity. If it is, it adds the quantity to the cart. If it
        is not, it alerts the user that they cannot add more of that item. */
        var order = (JSON.parse(localStorage.getItem('order')) != null) ? JSON.parse(localStorage.getItem('order')) : { items: [] },
            curMeal = _.find(order.items, { 'id': id })
        curMeal.cant = curMeal.cant - 1;
        if (curMeal.cant > 0) {
            /* A function that is called when the user clicks on the minus button. It decreases the
        quantity of the meal by 1. If the quantity is greater than 0, it updates the order and the
        menu. If the quantity is 0, it deletes the meal. */
            localStorage.setItem('order', JSON.stringify(order))
            menu.init()
            menu.getMeal()
            menu.placingFoodOrder()
        } else {
            menu.deleteMeal(id, true)
        }
    }

    /* Deleting the meal from the order. */
    menu.delete = function(id) {
        var order = (JSON.parse(localStorage.getItem('order')) != null) ? JSON.parse(localStorage.getItem('order')) : { items: [] };
        var curMeal = _.find(order.items, { 'id': id })
        _.remove(order.items, curMeal);
        localStorage.setItem('order', JSON.stringify(order))
        menu.init()
        menu.getMeal()
        menu.placingFoodOrder()
    }

    /* A function that deletes a meal from the menu. */
    menu.deleteMeal = function(id, remove) {
        if (undefined != id && id > 0) {

            if (remove == true) {
                menu.delete(id)
            } else {
                var conf = confirm('Are you sure you want to go hungry?')
                if (conf) {
                    menu.delete(id)
                }
            }

        }
    }

    /* Creating a form that will be submitted to a new page. */
    menu.placingFoodOrder = function() {
        var order = (JSON.parse(localStorage.getItem('order')) != null) ? JSON.parse(localStorage.getItem('order')) : { items: [] };
        var orderForm = '<form action="order.html" method="get"><input type="hidden" name="cmd" value="_cart"><input type="hidden" name="upload" value="1"><input type="hidden" name="currency_code" value="USD" /><input type="hidden" name="business" value="' + business_paypal + '">',
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