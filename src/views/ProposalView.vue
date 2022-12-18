<template>
    <div id =skyblue>
        <div class="center">
        <h1 id="yellow">七夕行事</h1>
        <img alt="tanabata" class="proposal_image" src="@/assets/tanabata.png"  />
        </div>
    </div>
</template>

<style>
#skyblue {
    background-color: rgb(228, 244, 255);
    min-height: 100vh;
    background-image: url(@/assets/trees.png);
  background-position: bottom; 
  background-size: contain;
  background-repeat: no-repeat;
}

.center {
    text-align: center;
}
#yellow {
    background-color: #ffe600;
    border: 1em;
    padding: 1em;
    margin: 0 20%;
}

.proposal_image {
    margin: 1em ; 
}

</style>