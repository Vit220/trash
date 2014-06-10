var magazyka = {



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

         if(document.getElementById("fff")){
            
            document.body.removeChild(document.getElementById("fff"));
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
        for (var f = 0; f < this.ListOfItems.length; f++){
            var a = 0;
            a += this.ListOfItems[f].count;
            console.log(a);
        }

        tdTwo.innerHTML = a;

        trOne.appendChild(tdOne);

        trTwo.appendChild(tdTwo);

        table.appendChild(caption);
        table.appendChild(trOne);
        table.appendChild(trTwo);


        document.getElementById("bodyFirst").appendChild(table);


    },

    DelBasket: function (param) {
        /* for (var i = 0; i < this.goods.length; i++) {
         for (var f = 0; f < this.ListOfItems.length; f++) {
         if (param == f && param == i) {
         this.goods[i].number += this.ListOfItems[f].count;
         }
         }
         }*/
        this.goods[param].number += this.ListOfItems[param].count;
        this.ListOfItems.splice(param, 1);
        this.createBasket();
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

        var table = document.getElementById("basket");
        var $tr,
            $documentFragment = document.createDocumentFragment(),
            $tdName,
            $tdPrice,
            $tdButton,
            $tdcount,
            $buttonDel,

            $button;

        //document.getElementById("basket").getElementsByTagName('tbody')[0].innerText = '';
        removeChilds(document.getElementById("basket").getElementsByTagName('tbody')[0]);

        function removeChilds(node) {
            var last;
            while (last = node.lastChild) node.removeChild(last);
        }

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
            $tdcount.id = i;
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
        self.inBasket();
        document.getElementById("basket").getElementsByTagName('tbody')[0].appendChild($documentFragment);
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

            }, false);


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
