<template>
    <Page class="app" actionBarHidden="true">
        <StackLayout class="page" backgroundColor="#000000">
            <FlexboxLayout class="table" flexDirection="column">
                <label  class="table_text" v-model="expression" fontSize="24pt" text="first" height="30%"/>
                <label  v-model="result" class="table_text" fontSize="48pt" text="second" height="70%"/>
            </FlexboxLayout>
            <GridLayout class="keys" columns="*, *, *, *" rows="*, *, *, *, *">
                <Button class="key clear" @tap="onClear" text="C" row="0" col="0" colSpan="3"/>
                <Button class="key op" @tap="onKeyTap('/')" text="/" row="0" col="3"/>
                <Button class="key"  @tap="onKeyTap('7')"   text="7" row="1" col="0"/>
                <Button class="key"  @tap="onKeyTap('8')"   text="8" row="1" col="1"/>
                <Button class="key"  @tap="onKeyTap('9')"   text="9" row="1" col="2"/>
                <Button class="key op" @tap="onKeyTap('*')" text="*" row="1" col="3"/>
                <Button class="key"  @tap="onKeyTap('4')"   text="4" row="2" col="0"/>
                <Button class="key"  @tap="onKeyTap('5')"   text="5" row="2" col="1"/>
                <Button class="key"  @tap="onKeyTap('6')"   text="6" row="2" col="2"/>
                <Button class="key op" @tap="onKeyTap('-')" text="-" row="2" col="3"/>
                <Button class="key" @tap="onKeyTap('1')"  text="1" row="3" col="0"/>
                <Button class="key" @tap="onKeyTap('2')"    text="2" row="3" col="1"/>
                <Button class="key" @tap="onKeyTap('3')"    text="3" row="3" col="2"/>
                <Button class="key op" @tap="onKeyTap('+')" text="+" row="3" col="3"/>
                <Button class="key" @tap="onKeyTap('0')"    text="0" row="4" col="0"  colSpan="2"/>
                <Button class="key" @tap="onKeyTap('.')"    text="." row="4" col="2"/>
                <Button class="key op" @tap="onResult" text="=" row="4" col="3"/>
            </GridLayout>
        </StackLayout>
    </Page>
</template>

<script>
  export default {
    data() {
        return {
            result: '0',
            expression: '',
            goodInput: true
      }
    },
    methods:{
        onKeyTap: function(text){
            if(!this.goodInput)
                return
            if(this.result == '0')
                this.result = text
            else
                this.result += text
        },
        onResult: function(){
            try{
                this.expression = this.result + '='
                this.result = eval(this.result);
                if (isNaN(this.result)) {
                    throw new Error();
                }
            }
            catch{
                this.expression = ''
                this.result = 'ошибка!';
                this.goodInput = false;
            }
        },
        onClear: function(){
            this.expression = ''
            this.result = '0';
            this.goodInput = true;
        }
    }
  };
</script>

<style scoped lang="scss">
    @import '@nativescript/theme/scss/variables/blue';

    // Custom styles
    .app{
        background-color: #fbd3b6;
    }

    .page{
        width: 90%;
        height: 90%;
        margin-top: 20px;
        border-radius: 75px;
    }

    .table{
        height: 20%;
        border-width: 3px;
        border-color: whitesmoke;
        border-radius: 75px;
        margin: 70px 50px 20px 50px;
        color: whitesmoke;
    }

    .keys{
        border-width: 3px;
        border-color: whitesmoke;
        border-radius: 75px;
        margin: 0px 50px 50px 50px;
        color: whitesmoke;
        padding: 10px;
    }

    .table_text{
        text-align: right;
        margin-right: 80px;
    }

    .key{
        border-radius: 50%;
        background-color: #808080;
        color: #ffffff;
        font-size: 36pt;
    }

    .clear{
        background-color: silver;
        color: #000;
    }

    .op{
        background-color: #ff8c00;
    }

    .key:active{
        background-color: #999999;
    }

    .clear:active{
        background-color: #eee;
    }

    .op:active(){
        background-color: #ffbb00;
    }
</style>
