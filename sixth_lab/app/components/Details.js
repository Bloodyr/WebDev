import { Http } from '@nativescript/core'

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

const Details = {
    template:
        `<Page>
            <StackLayout class="modalForm" width="100%">
                <Label class="city" :text="city" width="100%" />
                <GridLayout columns="*, *" rows="50, 50, 50, 50, 50, 50">
                    <label  class="weatherTable" horizontalAlignment="center" :text="weather" row="0" col="0" colSpan="2" />
                    <label  class="weatherTable" horizontalAlignment="center" text="Температура" row="1" col="0" />
                    <label  class="weatherTable" :text="temp" row="1" col="1" />
                    <label  class="weatherTable" horizontalAlignment="center" text="Ощущается как" row="2" col="0" />
                    <label  class="weatherTable" :text="feels_like" row="2" col="1" />
                    <label  class="weatherTable" horizontalAlignment="center" text="Давление" row="3" col="0" />
                    <label  class="weatherTable" :text="pressure" row="3" col="1" />
                    <label  class="weatherTable" horizontalAlignment="center" text="Влажность" row="4" col="0" />
                    <label  class="weatherTable" :text="humidity" row="4" col="1" />
                    <label  class="weatherTable" horizontalAlignment="center" text="Облачность" row="5" col="0" />
                    <label  class="weatherTable" :text="clouds" row="5" col="1" />
                </GridLayout>
                <Button @tap="onCloseTap" text="Закрыть" />
            </StackLayout>
        </Page>`
    ,
    props: ['id'],
    data() {
        return {
            result: '',
            city: '',
            weather: '',
            temp: '',
            feels_like: '',
            pressure: '',
            humidity: '',
            clouds: '',
            cities: ["Moscow","Saint Petersburg","Tver","Omsk",
                     "Kazan","Ekaterinburg","Khanty-Mansiysk",
                     "Krasnoyarsk","Magadan","Khabarovsk"]
        };
    },
    created() {
        Http.getString('https://api.openweathermap.org/data/2.5/weather?q=' + this.cities[this.id] +',ru&lang=ru&units=metric&appid=7cf6bcfd03a403360f1840d82b65c1dc')
            .then(
                (result) => {
                    this.result = JSON.parse(result)
                    this.city = this.result.name
                    this.weather = this.result.weather[0].description.capitalize()
                    this.temp = this.result.main.temp
                    this.feels_like = this.result.main.feels_like
                    this.pressure = this.result.main.pressure
                    this.humidity = this.result.main.humidity
                    this.clouds = this.result.clouds.all
                },
                    e => { console.log(e) }
            )
    },
    methods:{
        onCloseTap: function(){
            this.$modal.close()
        }
    }
};

export default Details;