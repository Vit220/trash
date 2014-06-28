var magazyka = {



    ListOfItems: [

    ],

    goods: [
        {
            name: 'Iphone',
            price: 9000,
            number: 1
        },
        {
            name: 'Чехол',
            price: 900,
            number: 37
        },
        {
            name: '111',
            price: 300,
            number: 37
        }
    ],

    addGoods: function (param) {
        var found = false,
            self = this;

        for (var i = 0; i < self.goods.length; i++) {
            if (param == i && self.goods[i].number > 0) {
                /*if (self.ListOfItems.length == 0) {
                 self.ListOfItems.push(self.goods[i]);
                 // self.ListOfItems[self.ListOfItems.length - 1].count = 1;
                 self.ListOfItems[self.ListOfItems.length - 1].count = 1;
                 self.goods[i].number--;
                 found = true;

                 }*/

                // else {


                for (var f = 0; f < self.ListOfItems.length; f++) {

                    if (self.ListOfItems[f].name == self.goods[i].name) {


                        found = true;
                        self.ListOfItems[f].count++;
                        self.goods[i].number--;


                    }

                }
                //}

                if (!found) {
                    self.ListOfItems.push(self.goods[i]);
                    self.ListOfItems[self.ListOfItems.length - 1].count = 1;

                    found = true;
                    self.goods[i].number--;


                }


                // self.removeNode(param);


                self.createBasket();
                break;

            }
            if (param == i && self.goods[i].number <= 0) {

                alert('Товара нет на складе');
            }
        }

    },

    inBasket: function () {
        // var $documentFragment = document.createDocumentFragment();
        var table,
            caption,
            trOne,
            tdOne,
            trTwo,
            tdTwo;
        //  var aa = document.getElementById("fff");
        //   var bb = document.getElementsByTagName("tr");
        // aa.removeChild(bb);
        if (document.getElementById("fff")) {

            document.getElementById("inBasketTT").removeChild(document.getElementById("fff"));
            document.getElementById("inBasketTT").style.display = 'none'
        }


        table = document.createElement('table');
        table.className = "q2";
        table.id = "fff";


        caption = document.createElement('caption');
        caption.innerHTML = "Корзина";

        trOne = document.createElement('tr');
        tdOne = document.createElement('td');
        trOne.className = "w4";
        tdOne.style = "text-align: center";
        tdOne.innerHTML = "Товаров в корзине";

        trTwo = document.createElement('tr');
        trTwo.className = "w5";
        //trTwo.id = "fff";

        tdTwo = document.createElement('td');
        tdTwo.style = "text-align: center";
        //var r = this.ListOfItems.length;
        var a = 0;
        for (var f = 0; f < this.ListOfItems.length; f++) {

            a += this.ListOfItems[f].count;
            console.log(a);
        }
        if (a % 100 >= 11 && a % 100 <= 14) {
            a += " товаров";
        } else {
            switch (a % 10) {
                case 1:
                {
                    a += " товар";
                    break;
                }

                case 2:
                case 3:
                case 4:
                {
                    a += " товара";
                    break;
                }

                default :
                {
                    a += " товаров";
                }
            }
        }

        tdTwo.innerHTML = a;

        trOne.appendChild(tdOne);

        trTwo.appendChild(tdTwo);

        table.appendChild(caption);
        table.appendChild(trOne);
        table.appendChild(trTwo);


        document.getElementById("inBasketTT").appendChild(table);
        document.getElementById("inBasketTT").style.display = 'block'

    },

    countPrice: function () {
        var sum = 0;
        for (var i = 0; i < this.ListOfItems.length; i++) {
            sum += this.ListOfItems[i].count * this.ListOfItems[i].price;
        }
        return sum;
    },

    DelBasket: function (param) {

        /* if (this.ListOfItems.name == this.goods.name) {

         this.goods[param].number += this.ListOfItems[param].count;
         }*/

         for (var i = 0; i < this.goods.length; i++) {
         for (var f = 0; f < this.ListOfItems.length; f++) {
         if (this.goods[i].name ==  param && this.ListOfItems[f].name ==  param ) {
         this.goods[i].number += this.ListOfItems[f].count;
         this.ListOfItems.splice(f, 1);
         this.createBasket();
         }
         }
         }

           /*     this.goods[param].number += this.ListOfItems[param].count;
        this.ListOfItems.splice(param, 1);
        this.createBasket();*/

    },


    ChangeBasket: function (param) {
        if (this.ListOfItems[param].count > 1) {
            this.goods[param].number++;
            this.ListOfItems[param].count--;
            this.createBasket();
        } else {
            this.DelBasket(param);
        }
    },


    createBasket: function () {

        var self = this;

        if (document.getElementById("basket")) {

            document.getElementById("basketTT").removeChild(document.getElementById("basket"));
            document.getElementById("basketTT").removeChild(document.getElementById("tableTotal"));
            document.getElementById("basketTT").style.display = 'none';
        }

        var table = document.createElement('table');
        table.className = "q3";
        table.id = "basket";

        var trFirst = document.createElement('tr');
        trFirst.className = "w3";


        var thName = document.createElement('th');
        thName.className = "td";
        thName.innerHTML = "Название товара";


        var thPrice = document.createElement('th');
        thPrice.className = "td";
        thPrice.innerHTML = "Цена";

        var thSum = document.createElement('th');
        thSum.className = "td";
        thSum.innerHTML = "Колличество";

        var thDoing = document.createElement('th');
        thDoing.className = "td";
        thDoing.innerHTML = "Действия";

        var tbody = document.createElement('tbody');


        trFirst.appendChild(thName);
        trFirst.appendChild(thPrice);
        trFirst.appendChild(thSum);
        trFirst.appendChild(thDoing);


        var caption = document.createElement('caption');
        caption.innerHTML = "Корзина";

        var $tr,
            $documentFragment = document.createDocumentFragment(),
            $tdName,
            $tdPrice,
            $tdButton,
            $tdcount,
            $buttonDel,

            $button;

        var tableTotal = document.createElement('table');
        tableTotal.className = "without-border";
        tableTotal.id = "tableTotal";

        var trTotal = document.createElement('tr');

        var tdTotal = document.createElement('td');
        tdTotal.innerHTML = "Вего: " + self.countPrice() + " грн";

        var $buttonReg = document.createElement('input');
        $buttonReg.type = 'button';
        $buttonReg.value = 'Перейти к оформлению';

        $buttonReg.addEventListener('click', function () {
            console.log("fdgd");
            var order = document.getElementById("order");
            order.style.display = 'block';
        }, false)

        var trReg = document.createElement('td');
        trReg.appendChild($buttonReg);


        trTotal.appendChild(tdTotal);
        trTotal.appendChild(trReg);
        tableTotal.appendChild(trTotal);


        for (var i = 0; i < this.ListOfItems.length; i++) {


            $tr = document.createElement('tr');
            // $tr.id = i;


            $tdName = document.createElement('td');
            $tdPrice = document.createElement('td');
            $tdcount = document.createElement('td');


            $tdButton = document.createElement('td');

            $tdName.className = "td";
            $tdPrice.className = "td";
            $tdcount.className = "td";

                   // $tdcount.id = this.ListOfItems[f].name;

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
            DELAttribute.nodeValue = this.ListOfItems[i].name;
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

            table.appendChild(caption);
            table.appendChild(caption);
            table.appendChild(trFirst);

            tbody.appendChild($tr);
            table.appendChild(tbody);


            $documentFragment.appendChild(table);
            $documentFragment.appendChild(tableTotal);

        }
        self.inBasket();
         document.getElementById("basketTT").appendChild($documentFragment);
        document.getElementById("basketTT").style.display = 'block';
        //document.body.appendChild($documentFragment);
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
            $tr.id = i;

            $tdName = document.createElement('td');
            $tdPrice = document.createElement('td');
            $tdButton = document.createElement('td');

            $tdName.className = "td";
            $tdPrice.className = "td";
            $tdButton.className = "centre";

            $tdName.innerHTML = this.goods[i].name;
            $tdPrice.innerHTML = this.goods[i].price;


            var $button = document.createElement('input');
            $button.type = 'button';
            $button.value = 'Купить';
            $button.id = 'buy';
            $button.className = 'buy-btn';

            var ourNewAttribute = document.createAttribute("goods-index");
            ourNewAttribute.nodeValue = i;
            $button.attributes.setNamedItem(ourNewAttribute);


            $button.addEventListener('click', function () {
                console.log('Нажали купить товар под индексов', this.getAttribute('goods-index'));
                // console.log('Вы кликнули по товару с именем: ' + event.target.innerHTML + " и ценой: " + event.target.getAttribute('price'));
                self.addGoods(this.getAttribute('goods-index'));

            }, false);


            $tdButton.appendChild($button);

            $tr.appendChild($tdName);
            $tr.appendChild($tdPrice);
            $tr.appendChild($tdButton);


            $documentFragment.appendChild($tr);


        }

        var table = document.getElementById("goods");
        table.appendChild($documentFragment);

        self.inBasket();

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

    },

    registration: function(){
        var name = document.getElementById("name-field");
        var lastName = document.getElementById("lastName-field");
        var address = document.getElementById("address-field");

        //var tab = document.getElementById("tab");
        var order = document.getElementById("order");

        var buttonEE = document.getElementById("reg-field");
        buttonEE.addEventListener('click', function () {
            alert(document.getElementById('name-field').value)
            order.style.display = 'block';
        }, false);
    }
}
