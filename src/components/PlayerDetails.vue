<template>
    <div class="player border rounded">
        <h3>{{ title }}</h3>
        <div class="form-group">
            <label>Player name :</label><input class="form-control" v-bind="name"/>
            <label>Deck :</label><input class="form-control" v-bind="deck"/>
            <label>Score :</label><input class="form-control" v-bind="score"/>
        </div>
    </div>
</template>
<script>
export default {
    name : 'PlayerDetails',
    data : function() {
        return{
        name : "",
        deck : "",
        score : ""
        }
    },
    props : {
        title : String
    }
}
</script>
<style>
    .player {
        margin: 2px;
        padding: 8px;
    }
    .form-group{
        margin-bottom: 0 !important;
    }
</style>