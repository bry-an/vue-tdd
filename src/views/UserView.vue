<template>
    <div>
        <v-user-profile 
            :user="user" />
        <v-user-search-form />
    </div>
</template>

<script>
import VUserProfile from "@/components/VUserProfile"
import VUserSearchForm from "@/components/VUserSearchForm"
export default {
    name: "UserView", 
    components: {
        VUserProfile, 
        VUserSearchForm
    }
}
</script>