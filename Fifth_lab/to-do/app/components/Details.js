const appSettings = require("@nativescript/core/application-settings");
import { Dialogs } from "@nativescript/core";

const Details = {
    template:
        `<Page>
            <StackLayout class="modalForm" width="100%">
                <TextField v-model="todo" />
                <check-box ref="chk" class="chk" text="Завершен" :checked="checked" @checkedChange="checked = $event.value" />
                <Button class="saveBtn" @tap="onSaveItem" text="Сохранить" />
                <Button class="removeBtn" @tap="onRemoveItem" text="Удалить" />
                <Button @tap="onCloseTap" text="Закрыть" />
            </StackLayout>
        </Page>`
    ,
    props: ['id'],
    data() {
        return {
            todo:"",
            checked: false,
            todos: [],
        };
    },
    created() {
        this.todos = JSON.parse(appSettings.getString("todos","[]"))
        this.todo = this.todos[this.id].text
        this.checked = this.todos[this.id].state
    },
    methods:{
        onCloseTap: function(){
            this.$modal.close()
        },
        onRemoveItem: function(){
            let removed = this.todos.splice(this.id, 1)
            appSettings.setString("todos", JSON.stringify(this.todos))
            this.$modal.close()
        },
        onSaveItem: function(){
            this.todos[this.id] = {text:this.todo, state: this.checked}
            appSettings.setString("todos", JSON.stringify(this.todos))
            Dialogs.alert("Сообщение сохранено")
        }
    }
};

export default Details;