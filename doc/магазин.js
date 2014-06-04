var magazyka = {

    $button: null,

    buy: null,

    ListOfItems: [

    ],

    goods: [
        {
            name: 'Iphone',
            price: 9000,
            number: 5

        },
        {
            name: 'Чехол',
            price: 900,
            number: 37

        }
    ],


    addGoods: function (param) {
        var found = false,

            self = this;
        for (var i = 0; i < self.goods.length; i++) {
            if (param == i && self.goods[i].number > 0) {
                if (self.ListOfItems.length == 0) {
                    self.ListOfItems.push(self.goods[i]);
                    self.ListOfItems[self.ListOfItems.length - 1].count = 1;
                    self.goods[i].number--;
                    found = true;

                }

                else {

                    for (var f = 0; f < self.ListOfItems.length; f++) {

                        if (self.ListOfItems[f].name == self.goods[i].name) {
                            found = true;
                            self.ListOfItems[f].count++;
                            self.goods[i].number--;
                            
                        }

                    }
                }

                if (!found) {
                    self.ListOfItems.push(self.goods[i]);
                    self.ListOfItems[self.ListOfItems.length - 1].count = 1;
                    found = true;
                    self.goods[i].number--;


                }

                for (var j = 0; j < self.ListOfItems.length; j++) {
                    if (self.ListOfItems[j].count > 1) {

                            self.removeNode();


                    }
                }
                self.createBasket();


            }
            if (param == i && self.goods[i].number <= 0) {

                alert('Товара нет на складе');
            }
        }

    },

    removeNode: function () {

        var table = document.getElementById("basket");
        var $tr = document.getElementById("ba");
        table.removeChild($tr);


    },

    DelBasket: function (param) {
        for (var f = 0; f < this.ListOfItems.length; f++) {
            if (param == f) {
                this.ListOfItems.splice(f, 1);
                this.removeNode();
            }
        }

    },


    ChangeBasket: function (param) {

        for (var f = 0; f < this.ListOfItems.length; f++) {

        }

    },
    /*

     for (var f = 0; f < this.ListOfItems.length; f++) {
     if (param == f && this.ListOfItems[f].count > 0) {
     this.ListOfItems[f].count--;
     //this.removeNode();
     //this.removeNode();
     //this.createBasket();

     }
     if (param == f && this.ListOfItems[f].count == 0) {

     this.ListOfItems.splice(f, 1);
     this.removeNode();
     }
     }
     if (this.ListOfItems.length == 1) {
     this.removeNode();
     } else {
     this.removeNode();
     this.removeNode();
     }

     this.createBasket();
     },*/

    createBasket: function () {
        var self = this;
        var table = document.getElementById("basket");
        var $tr,
            $documentFragment = document.createDocumentFragment(),
            $tdName,
            $tdPrice,
            $tdButton,
            $tdcount,
            $buttonDel,

            $button;

        for (var i = 0; i < this.ListOfItems.length; i++) {
            $tr = document.createElement('tr');
            $tr.id = 'ba';


            $tdName = document.createElement('td');
            $tdPrice = document.createElement('td');
            $tdcount = document.createElement('td');


            $tdButton = document.createElement('td');

            $tdName.className = "td";
            $tdPrice.className = "td";
            $tdcount.className = "td";
            $tdButton.className = "centre";

            $tdName.innerHTML = this.ListOfItems[i].name;
            $tdPrice.innerHTML = this.ListOfItems[i].price;
            $tdcount.innerHTML = this.ListOfItems[i].count;

            $buttonDel = document.createElement('input');
            $buttonDel.type = 'button';
            $buttonDel.value = 'Удалить';
            $buttonDel.id = 'del';
            //$buttonDel.className =

            $button = document.createElement('input');
            $button.type = 'button';
            $button.value = 'Изменить колличество';
            $button.id = 'change';


            var ourNewAttribute = document.createAttribute("list-index");
            ourNewAttribute.nodeValue = i;
            $button.attributes.setNamedItem(ourNewAttribute);

            var DELAttribute = document.createAttribute("list-index");
            DELAttribute.nodeValue = i;
            $buttonDel.attributes.setNamedItem(DELAttribute);

            $button.addEventListener('click', function () {
                console.log('Нажали Изменить колличество под индексом', this.getAttribute('list-index'));
                // console.log('Вы кликнули по товару с именем: ' + event.target.innerHTML + " и ценой: " + event.target.getAttribute('price'));
                self.ChangeBasket(this.getAttribute('list-index'));
            }, false)

            $buttonDel.addEventListener('click', function () {
                console.log('Нажали Удалить под индексом', this.getAttribute('list-index'));
                // console.log('Вы кликнули по товару с именем: ' + event.target.innerHTML + " и ценой: " + event.target.getAttribute('price'));
                self.DelBasket(this.getAttribute('list-index'));
            }, false)


            $tdButton.appendChild($buttonDel);
            $tdButton.appendChild($button);

            $tr.appendChild($tdName);
            $tr.appendChild($tdPrice);
            $tr.appendChild($tdcount);
            $tr.appendChild($tdButton);

            $documentFragment.appendChild($tr);

        }

        table.appendChild($documentFragment);
    },

    createGoods: function () {
        var self = this;
        var $tr,
            $documentFragment = document.createDocumentFragment(),
            $tdName,
            $tdPrice,
            $tdButton;
        //$button;


        for (var i = 0; i < this.goods.length; i++) {
            $tr = document.createElement('tr');

            $tdName = document.createElement('td');
            $tdPrice = document.createElement('td');
            $tdButton = document.createElement('td');

            $tdName.className = "td";
            $tdPrice.className = "td";
            $tdButton.className = "centre";

            $tdName.innerHTML = this.goods[i].name;
            $tdPrice.innerHTML = this.goods[i].price;


            self.$button = document.createElement('input');
            self.$button.type = 'button';
            self.$button.value = 'Купить';
            self.$button.id = 'buy';
            self.$button.className = 'buy-btn';

            var ourNewAttribute = document.createAttribute("goods-index");
            ourNewAttribute.nodeValue = i;
            self.$button.attributes.setNamedItem(ourNewAttribute);

           self.$button.addEventListener('click', function () {
                console.log('Нажали купить товар под индексов', this.getAttribute('goods-index'));
                // console.log('Вы кликнули по товару с именем: ' + event.target.innerHTML + " и ценой: " + event.target.getAttribute('price'));
                self.addGoods(this.getAttribute('goods-index'));
            }, false)


            $tdButton.appendChild(self.$button);

            $tr.appendChild($tdName);
            $tr.appendChild($tdPrice);
            $tr.appendChild($tdButton);

            $documentFragment.appendChild($tr);


        }

        var table = document.getElementById("goods");
        table.appendChild($documentFragment);

        /*table.addEventListener('click', function(event) {
         if (event.target.tagName && event.target.tagName == 'input' && event.target.className == 'buy-btn') {
         console.log("Индекс твоара", event.target.getAttribute('goods-index'))
         //console.log('Вы кликнули по товару с именем: ' + event.target.innerHTML + " и ценой: " + event.target.getAttribute('price'));
         }
         }, false)

         self.buy =  document.getElementById('buy');
         self.buy.addEventListener('click', function () {
         self.addGoods();
         }, false);
*/

    }
}
