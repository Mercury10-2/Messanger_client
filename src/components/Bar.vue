
<template>
    <v-app-bar fixed dark app>
        <v-spacer></v-spacer>
        <v-icon class="mr-4">mdi-leaf</v-icon>
        <v-toolbar-title>Мессенжер</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <div v-if="user != null">
            <v-menu bottom left>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn text v-bind="attrs" v-on="on">
                        {{ user.name }}
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item>
                        <Profile v-bind:user="user"/>
                    </v-list-item>
                    <v-list-item>
                        <v-btn text small v-on:click="logout()">
                            Выйти
                        </v-btn>
                    </v-list-item>
                </v-list>
            </v-menu>
        </div>
        <div v-else>
            <v-row>
                <v-col>
                    <Login v-bind:login="login"/>
                </v-col>
                <v-col>
                    <Registration v-bind:login="login"/>
                </v-col>
            </v-row>
        </div>
        <template v-slot:extension>
            <v-tabs align-with-title>
                <v-tab v-on:click="query('all-time')" >Все события</v-tab>
                <v-tab v-on:click="query('actual')">Актуальные</v-tab>
                <v-tab v-on:click="query('closed')">Закрытые</v-tab>
                <v-tab v-on:click="query('calendar')">Календарь</v-tab>
                <v-tab v-on:click="query('weather')">Погода</v-tab>
                <v-spacer></v-spacer>
                <v-spacer></v-spacer>
                <v-tab v-on:click="createEvent()">
                    <div></div>
                </v-tab>
                <v-spacer></v-spacer>
            </v-tabs>
        </template>
    </v-app-bar>
</template>

<script>
import Login from './Login'
import Registration from './Registration'
import Profile from './Profile'

export default {
    name: 'Bar',
    components: { Login, Registration, Profile },
    props: [ 'setQuery', 'user', 'login', 'logout' ],
    methods: {
        query(arg) {
            this.setQuery(arg)
        }
    }
}
</script>

<style>

</style>