<template id="interface_domotique">
  <div>
    <!-- Image Map Generated by http://www.image-map.net/ -->
    <img
      :src="homePlan"
      usemap="#image-map"
    >

    <map name="image-map">
      <area
        target="_blank"
        alt=" Salon"
        title=" Salon"
        href=" "
        coords="18,29,275,312"
      >
      <area
        target="_blank"
        alt=" Salle-a-manger"
        title=" Salle-a-manger"
        href=" "
        coords="277,30,579,237"
        shape="rect"
      >
      <area
        target="_blank"
        alt=" Cuisine"
        title=" Cuisine"
        href=" "
        coords="580,32,830,238"
        shape="rect"
      >
      <area
        target="_blank"
        alt=" Salle-de-bain"
        title=" Salle-de-bain"
        href=" "
        coords="373,439,465,248"
        shape="rect"
      >
      <area
        target="_blank"
        alt=" Garage"
        title=" Garage"
        href=" "
        coords="473,248,832,439"
        shape="rect"
      >
    </map>
  </div>
</template>

<script>
import homePlan from 'Image/home_plan.png';
export default {
  components: {
  },
  data: function () {
    return {
      homePlan
    };
  }
};
</script>
<style lang="scss">
@import url(//fonts.googleapis.com/css?family=Open+Sans);
@import url(//fonts.googleapis.com/css?family=Montserrat);

</style>
