<template>
    <li>
        <h2>{{name}} {{isFavorite ? '❤' : ''}}</h2>
        <button @click="toggleDetails">
            {{detailsAreVisible ? "Hide" : "Show"}} Details
        </button>
        <button @click="toggleFavorite">
            {{is-favorite ? "Remove" : "Add"}} Favorite
        </button>
        <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong> {{phoneNumber}}</li>
            <li><strong>Email:</strong> {{email}}</li>
        </ul>
    </li>
</template>


<script>
    export default {
        props: {
            id: {
                type: String,
                required: true,
            },
            name: {
                type: String,
                required: true,
            },
            phoneNumber: {
                type: String,
                required: true,
            },
            email: {
                type: String,
                required: true,
            },
            isFavorite: {
                type: Boolean,
                required: false,
                default: false,
            },
        },
        data() {
            return {
                detailsAreVisible: false,
            }
        },
        methods: {
            toggleDetails() {
                this.detailsAreVisible = !this.detailsAreVisible;
            },
            // Creating a custom event that will be listened
            toggleFavorite()  {
                this.$emit('toggle-favorite', this.id);
            },
        },
    }
</script>
