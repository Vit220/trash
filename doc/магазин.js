/**
 * Created by Vadim on 31.05.14.
 */

var magazyka = {

    buy     : null,

    ListOfItems: [],

    goods : [
        {
            name: 'Iphone',
            price: 9000,
            number: 3

        },
        {
            name: 'Чехол',
            price: 900,
            number: 37

        }
    ],

    addGoods : function (){
            alert('nff');
    },

    createGoods : function(){
        var self = this;
        var $tr,
            $documentFragment = document.createDocumentFragment(),
            $tdName,
            $tdPrice,
            $tdButton,
            $button;


        for (var i = 0; i < this.goods.length; i++ ){
            $tr         = document.createElement('tr');

            $tdName     = document.createElement('td');
            $tdPrice    = document.createElement('td');
            $tdButton   = document.createElement('td');

            $tdName.className   = "td";
            $tdPrice.className  = "td";
            $tdButton.className = "centre";

            $tdName.innerHTML  = this.goods[i].name;
            $tdPrice.innerHTML = this.goods[i].price;


            $button       = document.createElement('input');
            $button.type  = 'button';
            $button.value = 'Купить';
            $button.id    = 'buy';
            $button.className = 'buy-btn'
            
            var ourNewAttribute = document.createAttribute( "goods-index" );
            ourNewAttribute.nodeValue = i;
            $button.attributes.setNamedItem(ourNewAttribute);
            
            $button.addEventListener('click', function () {
                console.log('Нажали купить товар под индексов', this.getAttribute('goods-index'));
                //self.addItemToCart(this.getAttribute('goods-index'));
            }, false)

            $tdButton.appendChild($button);

            $tr.appendChild($tdName);
            $tr.appendChild($tdPrice);
            $tr.appendChild($tdButton);

            $documentFragment.appendChild($tr);





        }

        var table = document.getElementById("goods");
        table.appendChild($documentFragment);
        
        table.addEventListener('click', function(event) {
            if (event.target.tagName && event.target.tagName == 'input' && event.target.className = 'buy-btn') {
                cobnsole.log("Индекс твоара", event.target.getAttribute('goods-index'))
                //console.log('Вы кликнули по товару с именем: ' + event.target.innerHTML + " и ценой: " + event.target.getAttribute('price'));
            }
        }, false)

       /* self.buy =  document.getElementById('buy');
        self.buy.addEventListener('click', function () {
            self.addGoods();
        }, false); */




    }
}
