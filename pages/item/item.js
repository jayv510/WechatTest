// pages/menu/menu.js
Page({

  /**
   * Page initial data
   */
  data: {
    activeCardId: -1,
    items: [
      {
        name: 'Padthai',
        nameChinese: '泰式炒河粉',
        price: '8',
        description: '作为与世界各地美食齐名的泰国招牌菜，泰式炒河粉无需多述。这道经典老菜有数不尽的做法变化，但一般都是河粉搭配豆腐、豆芽、洋葱和必不可缺的一位配料：几乎磨成粉末的花生。泰式炒河粉需要就餐者自行调味：依照自身口味适量添加鱼露、糖、辣椒粉和花生碎。',
        orderno: 0,
        photoUrl: 'https://res.cloudinary.com/dhabtcsqh/image/upload/v1545056476/E0_B8_9C_E0_B8_B1_E0_B8_94_E0_B9_84_E0_B8_97_E0_B8_A2-18.jpg'
      },
      {
        name: 'Tom Yum Goong',
        nameChinese: '冬阴功汤',
        price: '28',
        description: '这是泰国家喻户晓的美味，以大量香草调味烹煮。柠檬草、青柠叶和葱姜散发迷人芳香，而辣椒和鱼露迸发刺激口感。食材有大虾（功）和蘑菇。口味是一种独特的酸辣味，特别适合餐前开胃，如果与米饭搭配，也是一道不错的主菜。',
        orderno: 0,
        photoUrl: 'https://res.cloudinary.com/dhabtcsqh/image/upload/v1545064471/tom-ym1.jpg'
      },
      {
        name: 'Somtum',
        nameChinese: '凉拌木瓜丝',
        price: '6.1',
        description: '凉拌木瓜丝（辣味木瓜沙拉）是泰国东北部的地方菜，但在全国各地受到几近狂热的追捧。各地原料上的些许差异，可能让不同餐厅做出的酸甜口感产生很大不同。无论做法如何，都有青木瓜丝和健康的卡路里含量。烧烤鸡肉和粘米饭团都是绝佳配菜。',
        orderno: 0,
        photoUrl: 'https://res.cloudinary.com/dhabtcsqh/image/upload/v1545064973/IMG_1223-c_scale_w_1200.jpg'
      },
      {
        name: 'Chicken Green Curry',
        nameChinese: '绿咖喱鸡',
        price: '8.12',
        description: '绿咖喱的颜色从哪来？绿咖喱酱。抱歉，答案很没味，但这道菜很美味。在各式各样的所有咖喱当中，和美元绿票一个颜色的咖喱最辣。它也最不像印度咖喱，泰国人就是有办法将外来食物做成泰国特色菜。椰奶就是例证。 ',
        orderno: 0,
        photoUrl: 'https://res.cloudinary.com/dhabtcsqh/image/upload/v1545065030/thai-chicken-green-curry.jpg'
      },
      {
        name: 'Tom Kha Gai',
        nameChinese: '椰汁鸡汤',
        price: '10',
        description: '可能是世界上最爽口的汤，椰汁鸡汤（南姜炖鸡）将椰奶与柠檬草、南姜（亚洲姜）和鸡肉做成一道菜。它的味道比冬阴功汤更甜、更清淡。在满满一桌泰国美食当中，椰汁鸡汤脱颖而出，喝过一口就停不下来。',
        orderno: 0,
        photoUrl: 'https://res.cloudinary.com/dhabtcsqh/image/upload/v1545065138/tom-kha-gai-soup-recipe-1024x683.jpg'
      },
      {
        name: 'Khao Mun Gai',
        nameChinese: '鸡饭',
        price: '5.2',
        description: '这在泰国就相当于英国的炸鱼薯条，这道无处不在的小吃大多在白天供应（售完为止），在专卖鸡饭的小摊和普通餐厅均可吃到。鸡肉慢煮到软嫩，然后再用鸡汤煮米。这意味着，鸡饭除了美味可口之外，胆固醇含量也很高。搭配鸡汤和甜辣酱，它是绝佳的午餐小吃。 ',
        orderno: 0,
        photoUrl:'https://res.cloudinary.com/dhabtcsqh/image/upload/v1545065196/Pohs-Hainanese-chicken-rice.jpg'
      },
      {
        name: 'Coke',
        nameChinese: '可乐',
        price: '2',
        description: '330ml',
        orderno: 0
      },
      {
        name: 'Pepsi',
        nameChinese: '百事可乐',
        price: '2',
        orderno: 0
      },
    ],
    
    subtotal: 0  
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  },
  // clickcard etc
  clickedCard: function (e) {
    console.log(e)
    let id = e.target.dataset.id;
    console.log(id)
    this.setData({
      activeCardId: id
    // re-renders wxml page with new data (id)
    })
  },

  closeCard: function (f) {
  console.log(f)
  let id = f.target.dataset.id;
  console.log(id)
  this.setData({
    activeCardId: -1

    })
  },

  minusOrder: function (minus) {
    console.log(minus)
    let id = minus.target.dataset.id;
    // let name = 'items[' + id + '].orderno';
    let orderno = this.data.items[id].orderno;
    let key = `items[${id}].orderno`
    console.log(orderno)
    console.log(key)
    if(orderno != 0){
      this.setData({
      [key]: orderno - 1
      })
      // this.data.items[id].orderno--;
      // this.setData({
      //   'tata.hi.gaga': 5
      // })

      // let tempItems = Object.assign([], this.data.items);
      // tempItems[0].orderno--;
      // this.setData({
      //   items: tempItems
      // })
    }

  },

  addOrder: function (plus) {
    console.log(plus)
    let id = plus.target.dataset.id;
    // let name = 'items[' + id + '].orderno';
    let orderno = this.data.items[id].orderno;
    let key = `items[${id}].orderno`
    console.log(orderno)
    console.log(key)
      this.setData({
        [key]: orderno + 1
      })
  },
})