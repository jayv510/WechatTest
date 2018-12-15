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
        description: 'Shrimp Rice Noodles',
        orderno: 0
      },
      {
        name: 'Radna',
        price: '9',
        description: 'Shrimp Rice Noodles',
        orderno: 0
      },
      {
        name: 'Somtum',
        price: '6',
        description: 'Shrimp Rice Noodles',
        orderno: 0
      },
      {
        name: 'Bamee',
        price: '8',
        description: 'Shrimp Rice Noodles',
        orderno: 0
      },
      {
        name: 'Pineapple Fried Rice',
        price: '10',
        description: 'Shrimp Rice Noodles',
        orderno: 0
      },
      {
        name: 'Mango Sticky Rice',
        price: '5.2',
        description: 'Shrimp Rice Noodles',
        orderno: 0
      },
      {
        name: 'Coke',
        price: '2',
        description: 'Shrimp Rice Noodles',
        orderno: 0
      },
      {
        name: 'Pepsi',
        price: '2',
        description: 'Shrimp Rice Noodles',
        orderno: 0
      },
      {
        name: 'Sprite',
        price: '2',
        description: 'Shrimp Rice Noodles',
        orderno: 0
      },
      {
        name: 'Orange Juice',
        price: '2',
        description: 'Shrimp Rice Noodles',
        orderno: 0
      },
    ]
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