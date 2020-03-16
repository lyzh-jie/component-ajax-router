<template>
  <div>
      123
  </div>
</template>

<script>
import axios from 'axios';
export default {
    async mounted(){
        const url = '/api/testCORS';
        try{
            let response = await axios.get(url);
            console.log(response);
        }catch(err){
            console.log(err);
        }
    }

}
</script>

<style>

</style>