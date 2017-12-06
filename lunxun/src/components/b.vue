<template>
  <div class="ban">
    <h1>我是b组件</h1>
    <h1>{{country_name}}</h1>
    <a :href="'/competitions/enroll_detail/?competition_id='+no.id" >touser</a>
    <a href="#" class = "toucha" @click = "touch">ABCDE</a>
    <a href="#" class = "touchb" @click = "touchb">FGHIJ</a>
    <a href="#" class = "touchc" @click = "touchc">KLMNO</a>
    <a href="#" class = "touchd" @click = "touchd">PQRST</a>
    <a href="#" class = "touche" @click = "touche">UVWXYZ</a>
    <div class = "show" v-if = "hidden_a">
      <ul>
        <li v-for = "item in a"><a href="javascript:;" @click = "getValue(item)" class = "country_li">{{item}}</a></li>
      </ul>
       <ul>
        <li v-for = "item in b"><a href="javascript:;" @click = "getValue(item)" class = "country_li">{{item}}</a></li>
      </ul>
       <ul>
        <li v-for = "item in c"><a href="javascript:;" @click = "getValue(item)" class = "country_li">{{item}}</a></li>
      </ul>
       <ul>
        <li v-for = "item in d"><a href="javascript:;" @click = "getValue(item)" class = "country_li">{{item}}</a></li>
      </ul>
       <ul>
        <li v-for = "item in e"><a href="javascript:;" @click = "getValue(item)" class = "country_li">{{item}}</a></li>
      </ul>
    </div>
       <div class = "show" v-if = "hidden_b">
      <ul>
        <li v-for = "item in f"><a href="javascript:;" @click = "getValue(item)" class = "country_li">{{item}}</a></li>
      </ul>
       <ul>
        <li v-for = "item in g"><a href="javascript:;" @click = "getValue(item)" class = "country_li">{{item}}</a></li>
      </ul>
       <ul>
        <li v-for = "item in h"><a href="javascript:;" @click = "getValue(item)" class = "country_li">{{item}}</a></li>
      </ul>
       <ul>
        <li v-for = "item in i"><a href="javascript:;" @click = "getValue(item)" class = "country_li">{{item}}</a></li>
      </ul>
       <ul>
        <li v-for = "item in j"><a href="javascript:;" @click = "getValue(item)" class = "country_li">{{item}}</a></li>
      </ul>
    </div>
     <div class = "show" v-if = "hidden_c">
      <ul>
        <li v-for = "item in k"><a href="javascript:;" @click = "getValue(item)" class = "country_li">{{item}}</a></li>
      </ul>
       <ul>
        <li v-for = "item in l"><a href="javascript:;" @click = "getValue(item)" class = "country_li">{{item}}</a></li>
      </ul>
       <ul>
        <li v-for = "item in m"><a href="javascript:;" @click = "getValue(item)" class = "country_li">{{item}}</a></li>
      </ul>
       <ul>
        <li v-for = "item in n"><a href="javascript:;" @click = "getValue(item)" class = "country_li">{{item}}</a></li>
      </ul>
       <ul>
        <li v-for = "item in o"><a href="javascript:;" @click = "getValue(item)" class = "country_li">{{item}}</a></li>
      </ul>
    </div>
     <div class = "show" v-if = "hidden_d">
      <h1 v-model = "country_name"></h1>
      <ul>
        <li v-for = "item in p"><a href="javascript:;" @click = "getValue(item)" class = "country_li">{{item}}</a></li>
      </ul>
       <ul>
        <li v-for = "item in q"><a href="javascript:;" @click = "getValue(item)" class = "country_li">{{item}}</a></li>
      </ul>
       <ul>
        <li v-for = "item in r"><a href="javascript:;" @click = "getValue(item)" class = "country_li">{{item}}</a></li>
      </ul>
       <ul>
        <li v-for = "item in s"><a href="javascript:;" @click = "getValue(item)" class = "country_li">{{item}}</a></li>
      </ul>
       <ul>
        <li v-for = "item in t"><a href="javascript:;" @click = "getValue(item)" class = "country_li">{{item}}</a></li>
      </ul>
    </div>
     <div class = "show" v-if = "hidden_e">
      <ul>
        <li v-for = "item in u"><a href="javascript:;" @click = "getValue(item)" class = "country_li">{{item}}</a></li>
      </ul>
       <ul>
        <li v-for = "item in v"><a href="javascript:;" @click = "getValue(item)" class = "country_li">{{item}}</a></li>
      </ul>
       <ul>
        <li v-for = "item in w"><a href="javascript:;" @click = "getValue(item)" class = "country_li">{{item}}</a></li>
      </ul>
       <ul>
        <li v-for = "item in x"><a href="javascript:;" @click = "getValue(item)" class = "country_li">{{item}}</a></li>
      </ul>
       <ul>
        <li v-for = "item in y"><a href="javascript:;" @click = "getValue(item)" class = "country_li">{{item}}</a></li>
      </ul>
      <ul>
        <li v-for = "item in z"><a href="javascript:;" @click = "getValue(item)" class = "country_li">{{item}}</a></li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
  h3{
    color:red;
  }
</style>
<script>
  export default{
    data(){
      return{
        hidden_a:true,
        hidden_b:false,
        hidden_c:false,
        hidden_d:false,
        hidden_e:false,
        arr:[1,2,3,4],
        country:[],
        country_name:"",
        name:[],//
        big:[],//首字母大写的国家名字
        countries:[],//国家名小写
        a:[],
        b:[],
        c:[],
        d:[],
        e:[],
        f:[],
        g:[],
        h:[],
        i:[],
        j:[],
        k:[],
        l:[],
        m:[],
        n:[],
        o:[],
        p:[],
        q:[],
        r:[],
        s:[],
        t:[],
        u:[],
        v:[],
        w:[],
        x:[],
        y:[],
        z:[],
        state:[],
        statename:[],
        no:{
          id:123456
        }
      }
    },
    methods:{
      touch(){
        this.hidden_a = true;
        this.hidden_b = this.hidden_c = this.hidden_d = this.hidden_e = false;
      },
      touchb(){
        this.hidden_b = true;
        this.hidden_a = this.hidden_c = this.hidden_d = this.hidden_e = false;
      },
      touchc(){
        this.hidden_c = true;
        this.hidden_b = this.hidden_a = this.hidden_d = this.hidden_e = false;
      },
      touchd(){
        this.hidden_d = true;
        this.hidden_b = this.hidden_c = this.hidden_a = this.hidden_e = false;
      },
      touche(){
        this.hidden_e = true;
        this.hidden_b = this.hidden_c = this.hidden_d = this.hidden_a = false;
      },
      getValue(item){
        this.country_name = item;
        console.log(item);
        let len = this.name.length;
        for(let i = 0; i < len; i ++){
          if(this.name[i].name_en.toUpperCase() == item.toUpperCase()){
            if(this.name[i].cities == 0){
              return false;
            }else{
              this.state = [];
              this.state.push(this.name[i].cities)
            }
          }
        }
        let statelen = this.state[0].length;
        this.statename = [];
        for(let i = 0; i < statelen; i ++){
          this.statename.push(this.state[0][i].name_en);
        }
        console.log(this.statename);
      },
      add(){
        this.$http.get("../../src/data/data.json").then(res=>{
          let data = res.body.continent;
          let len = res.body.continent.length;
          console.log(data);
          for(let i = 0; i < len; i ++){
            this.country.push(data[i].countries);
        }
        this.name = this.country[0].concat(this.country[1],this.country[2],this.country[3],this.country[4],this.country[5],this.country[6])
        let Len = this.name.length;
        for(let i = 0; i < Len; i ++){
          this.countries.push(this.name[i].name_en);
        }
        let country_len = this.countries.length;
        for(let i = 0; i < country_len; i ++){
          let d = this.countries[i][0].toUpperCase();
          let str = this.countries[i].replace(this.countries[i][0],d);
          this.big.push(str);
        }
        let biglen = this.big.length
        for(let i = 0; i < biglen; i ++){
           switch(this.big[i][0]){
                case "A":
                this.a.push(this.big[i]);
                break;
                case "B":
                this.b.push(this.big[i]);
                break;
                case "C":
                this.c.push(this.big[i]);
                break;
                case "D":
                this.d.push(this.big[i]);
                break;
                case "E":
                this.e.push(this.big[i]);
                break;
                case "F":
                this.f.push(this.big[i]);
                break;
                case "G":
                this.g.push(this.big[i]);
                break;
                case "H":
                this.h.push(this.big[i]);
                break;
                case "I":
                this.i.push(this.big[i]);
                break;
                case "J":
                this.j.push(this.big[i]);
                break;
                case "K":
                this.k.push(this.big[i]);
                break;
                case "L":
                this.l.push(this.big[i]);
                break;
                case "M":
                this.m.push(this.big[i]);
                break;
                case "N":
                this.n.push(this.big[i]);
                break;
                case "O":
                this.o.push(this.big[i]);
                break;
                case "P":
                this.p.push(this.big[i]);
                break;
                case "Q":
                this.q.push(this.big[i]);
                break;
                case "R":
                this.r.push(this.big[i]);
                break;
                case "S":
                this.s.push(this.big[i]);
                break;
                case "T":
                this.t.push(this.big[i]);
                break;
                case "U":
                this.u.push(this.big[i]);
                break;
                case "V":
                this.v.push(this.big[i]);
                break;
                case "W":
                this.w.push(this.big[i]);
                break;
                case "X":
                this.x.push(this.big[i]);
                break;
                case "Y":
                this.y.push(this.big[i]);
                break;
                case "Z":
                this.z.push(this.big[i]);
                break;
           }
        }
        }).catch(err=>{
          console.log(err)
        })
      }
    },
    mounted(){
      this.add();
    },
  }
</script>