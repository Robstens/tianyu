<template>
  <div class="warpper">
    <input v-model="NewItem" @keyup.enter="addNew" placeholder="今天想干啥呢~"></input>
    <div class="item">
      <ul>
        <li v-for="(item,index) in items" :key="index" :class="{finished:item.isFined}" @click="toggleFinsh(item)">
          <i></i>
          <span>{{item.text}}</span>

          <em @click="del">X</em>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Store from '../store'
console.log(Store)
export default {
  name: 'HelloWorld',
  data () {
    return {
      title: '',
      NewItem:'',
      items:Store.feach()
    }
  },
  watch:{
    items:{
      handler:function(items){
        Store.save(items)
      },
      deep:true
    }
  },
    methods:{
      toggleFinsh(item){
        item.isFined =! item.isFined
        console.log(111);
      },
      addNew(){
        var reg = /[`~!@#$%^&*()_+<>?:"{},.\/;'[\]]/im;
        var text = /^\d+$/;
        if(reg.test(this.NewItem)){
          alert("请不要输入非法字符！")
          this.NewItem = ''
          return;
        }
        if(text.test(this.NewItem)){
          alert("请不要输入都是数字！")
          this.NewItem = ''
          return;
        }
        if(this.NewItem === ''){
          alert("请输入内容！")
        }else{
        this.items.unshift({
          text:this.NewItem,
          isFined:this.isFined
        })
        this.NewItem = ''
        }
      },
   
      del(index){
        this.items.splice(index,1);
      }
    }
}
</script>

<style scoped>
.warpper{
  width: 600px;
  margin: 0 auto;
}
h1{
  text-align: center;
  color: #fff;
  font-weight: 400;
  font-style: italic;
}
.item li.finished i{
  height: 40px;
  width: 40px;
  background: url('data:image/svg+xml;utf8,<svg%20xmlns%3D"http%3A//www.w3.org/2000/svg"%20width%3D"40"%20height%3D"40"%20viewBox%3D"-10%20-18%20100%20135"><circle%20cx%3D"50"%20cy%3D"50"%20r%3D"50"%20fill%3D"none"%20stroke%3D"%23bddad5"%20stroke-width%3D"3"/><path%20fill%3D"%235dc2af"%20d%3D"M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z"/></svg>') no-repeat;
}
.item li.finished span{
 text-decoration:line-through;
  color: #ddd;
}
input{
  outline: none;
  padding: 16px 14px;
  width: 95%;
  font-size: 16px;
  border: 1px solid #ddd;
}
input::-webkit-input-placeholder {
      color: #aab2bd;
      font-style: italic;
      font-size: 14px;
    }
ul{
  list-style: none;
  background: #fff;
  width: 100%;
  margin: 0;
  padding: 0;
}
.item ul li{
  border-bottom: 1px solid #ddd;
  padding:6px 16px;
  display: flex;
  min-height: 36px;
  line-height: 24px;
  flex: 1;
  align-items: center;/*垂直居中*/
  justify-content: center;/*水平居中*/
  justify-content:space-between;
}
.item ul li i{
  width: 40px;
  height: 40px;
  background: url('data:image/svg+xml;utf8,<svg%20xmlns%3D"http%3A//www.w3.org/2000/svg"%20width%3D"40"%20height%3D"40"%20viewBox%3D"-10%20-18%20100%20135"><circle%20cx%3D"50"%20cy%3D"50"%20r%3D"50"%20fill%3D"none"%20stroke%3D"%23ededed"%20stroke-width%3D"3"/></svg>') no-repeat;
}
.item ul li em{
  color: red;
  font-size: 18px;
  cursor: pointer;
  text-align: right;
}
.item ul li span{
  cursor: pointer;
  font-size: 15px;
  width: 86%;
  padding: 0 8px;
  color: #333131;
}
@media screen and ( max-width: 640px ) {
  body {
        background:lightblue;
    }
.warpper{
  width: 100%;
  margin: 0 auto;
  text-align: center;
}
input{
  width: 85.6%;
  font-size: 14px;
}
h1{
  width: 93%;
}
.item{
  width: 93%;
  margin: 0 auto;
  text-align: center;
  }
  .item ul li{
    padding:4px 16px;
    line-height: 22px;
  }
  .item ul li span{
    font-size: 13px;
    text-align: left;
  }
}
</style>
