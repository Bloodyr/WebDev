<template>
    <Page>
        <ActionBar title="To-Do Список" class="action-bar" />
        <StackLayout class="home-panel">
            <TextField v-model="todo" />
            <Button class="addBut" text="Добавить" @tap="onButtonTap" />
            <ListView ref="lf" class="list" for="item in todos" height="500">
                <v-template if="item.state">
                     <StackLayout orientation="horizontal">
                        <Label class="msg_text" textWrap="true" :text="item.text" width="70%" />
                        <Button @tap ="onTap($index)">
                            <FormattedString>
                                <Span text="➜" fontAttributes="Bold"></Span>            
                            </FormattedString>
                        </Button>
                     </StackLayout>
                </v-template>
                 <v-template else>
                     <StackLayout orientation="horizontal">
                        <Label textWrap="true" :text="item.text" width="70%" />
                        <Button @tap ="onTap($index)">
                            <FormattedString>
                                <Span text="➜" fontAttributes="Bold"></Span>            
                            </FormattedString>
                        </Button>
                     </StackLayout>
                </v-template>
            </ListView>
        </StackLayout>
    </Page>
</template>

<script>
    const appSettings = require("@nativescript/core/application-settings");
    import * as utils from '@nativescript/core/utils/utils';

    import Details from './Details'

    export default {
        data() {
            return {
                todo:"",
                todos: [],
            };
        },
        created() {
            this.todos = JSON.parse(appSettings.getString("todos","[]"))
        },
        methods: {
            onButtonTap: function() {
                if(this.todo.trim() == "")
                    return
                this.todos.push({text:this.todo, state:false})
                appSettings.setString("todos", JSON.stringify(this.todos))
                this.todo = ""
                utils.ad.dismissSoftInput();
                this.$refs.lf.refresh();
            },
            onTap: function(index){
                this.$showModal(Details, {
                    fullscreen: true, 
                    props: {id: index}}).then(()=>{
                        this.todos = JSON.parse(appSettings.getString("todos","[]"))
                        this.$refs.lf.refresh();
                    })
            }
        }
    };
</script>

<style scoped lang="scss">
    @import '@nativescript/theme/scss/variables/blue';

    .addBut{
        background-color: darkslateblue;
        color: floralwhite;
    }

    .modalForm{
        margin-top: 200;
    }

    .removeBtn{
        color: floralwhite;
        background-color: red;
    }

    .saveBtn{
        color: floralwhite;
        background-color: green;
    }

    .chk{
        margin-left: 10;
    }

    .msg_text{
        color: green;
    }
</style>
