var magazyka = {

    buy: null,

    ListOfItems: [],

    goods: [
        {
            name: 'Iphone',
            price: 9000,
            number: 0

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
                if (this.ListOfItems == 0) {
                    self.ListOfItems.push(goods[i]);
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

                if(!found){
                    self.ListOfItems.push(goods[i]);
                    self.ListOfItems[self.ListOfItems.length - 1].count = 1;
                    found = true;
                    self.goods[i].number--;
                }

                break;

            }
            if (param == i && this.goods[i].number <= 0) {

                alert('Товара нет на складе');
            }
        }

    },

    createGoods: function () {
        var self = this;
        var $tr,
            $documentFragment = document.createDocumentFragment(),
            $tdName,
            $tdPrice,
            $tdButton,
            $button;


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


            $button = document.createElement('input');
            $button.type = 'button';
            $button.value = 'Купить';
            $button.id = 'buy';
            $button.className = 'buy-btn'

            var ourNewAttribute = document.createAttribute("goods-index");
            ourNewAttribute.nodeValue = i;
            $button.attributes.setNamedItem(ourNewAttribute);

            $button.addEventListener('click', function () {
                console.log('Нажали купить товар под индексов', this.getAttribute('goods-index'));
                // console.log('Вы кликнули по товару с именем: ' + event.target.innerHTML + " и ценой: " + event.target.getAttribute('price'));
                self.addGoods(this.getAttribute('goods-index'));
            }, false)


            $tdButton.appendChild($button);

            $tr.appendChild($tdName);
            $tr.appendChild($tdPrice);
            $tr.appendChild($tdButton);

            $documentFragment.appendChild($tr);


        }

        var table = document.getElementById("goods");
        table.appendChild($documentFragment);

        /*table.addEventListener('click', function(event) {
         if (event.target.tagName && event.target.tagName == 'input' && event.target.className = 'buy-btn') {
         console.log("Индекс твоара", event.target.getAttribute('goods-index'))
         //console.log('Вы кликнули по товару с именем: ' + event.target.innerHTML + " и ценой: " + event.target.getAttribute('price'));
         }
         }, false)*/

        /* self.buy =  document.getElementById('buy');
         self.buy.addEventListener('click', function () {
         self.addGoods();
         }, false); */


    }
}
