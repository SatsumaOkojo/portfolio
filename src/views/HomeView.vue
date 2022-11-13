<template>
  <main>
    <img alt="wood" class="wood" src="@/assets/wood.jpg" />
        <div class="box">
           <p>困ったな～<br>
              こんなことありませんか？</p>
        </div>
        <img alt="character" class="character" src="@/assets/character.png" />
  </main>
</template>

<style>
/* 木の画像 */
 .wood {
  min-width:100%;
  height:400px;
 }

/* 困った人下のテキストボックス */
 .box{
    position: relative;
    background: #fff0cd;
    box-shadow: 0px 0px 0px 5px #fff0cd;
    border: dashed 2px white;
    padding: 0.2em 0.5em;
    color: #454545;
}

.box:after{
    position: absolute;
    content: '';
    right: -7px;
    top: -7px;
    border-width: 0 15px 15px 0;
    border-style: solid;
    border-color: #ffdb88 #fff #ffdb88;
    box-shadow: -1px 1px 1px rgba(0, 0, 0, 0.15);
}

.box p {
    margin: 0; 
    padding: 0;
    text-align: center;
}

/* 困った人 */
.character {
  position: absolute;
  top: 25px;
  right: 25px;
  width: 80px;
  height: 80px;
}

@media (min-width: 1024px) {
/* 木の画像 */
  .wood {
  min-width:100%;
  height:400px;
 } 

/* 困った人下のテキストボックス */
 .box {
    position: relative;
    background: #fff0cd;
    box-shadow: 0px 0px 0px 5px #fff0cd;
    border: dashed 2px white;
    padding: 1em ;
    margin: 1em 3em;
    color: #454545;
}

.box:after{
    position: absolute;
    content: '';
    right: -7px;
    top: -7px;
    border-width: 0 15px 15px 0;
    border-style: solid;
    border-color: #ffdb88 #fff #ffdb88;
    box-shadow: -1px 1px 1px rgba(0, 0, 0, 0.15);
}

.box p {
    margin: 0; 
    padding: 0;
    text-align: center;
}

/* 困った人 */
.character {
  position: absolute;
  top: 430px;
  right: 27px;
  width:130px;
  height: 130px;
}
}
</style>
