
<template>
    <v-container fluid app>
    <v-row>
        <v-dialog v-model="dialog" max-width="400px">
            <template v-slot:activator="{ on, attrs }">
                <v-btn text small v-bind="attrs" v-on="on">
                    Профиль
                </v-btn>
            </template>
            <v-card>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="4">
                                <p>Имя:</p>
                            </v-col>
                            <v-col cols="8">
                                <p>{{ user.name }}</p>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="4">
                                <p>Пол:</p>
                            </v-col>
                            <v-col cols="8">
                                <p>{{ user.gender }}</p>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="4">
                                <p>Почта:</p>
                            </v-col>
                            <v-col cols="8">
                                <p>{{ user.email }}</p>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>
            </v-card>
        </v-dialog>
    </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'Profile',
    components: {  },
    props: [ 'user' ],
    data() {
        return {
            dialog: false,
        }
    },
    methods: {
        gender() {
            console.log(this.user.email)
            return this.user.gender == 'male' ? 'мужской' : 'женский'
        }
    }
}
</script>

<style>

</style>