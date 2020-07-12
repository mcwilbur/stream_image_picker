<template>
  <div class="home container">
    <CardList></CardList>
    <div class="row">
      <PlayerDetails :title="leftPlayer"/>
      <PlayerDetails :title="rightPlayer"/>
    </div>
    <div class="row">
    
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CardList from '@/components/CardList'
import PlayerDetails from '@/components/PlayerDetails'

export default {
  name: 'Home',
  components: {
    CardList,
    PlayerDetails
  },
  data : function(){
    return {
      rightPlayer : "Right Player",
      leftPlayer : "Left Player",
    }
  }
}
</script>
