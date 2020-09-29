<template>
  <div class="hint_main" :style="{width: iconWidthHeight, height: iconWidthHeight, 'margin-left': marginLeft}">
    <div class="hint_icon"></div>
    <div class="hint_content">
      <div class="hint_content_inner">{{hintContent}}</div>
    </div>
  </div>
</template>

<script>
export default {
props: {
    hintContent: {
        type: String,
        default: 'Пусто'
    },
    iconWidthHeight: {
        type: String,
        default: '15px'
    },
    marginLeft:{
        type: String,
        default: '5px'
    }

}
};
</script>

<style scoped>
.hint_main {
  position: relative;
  display: flex;
  align-items: center;
}

.hint_icon {
  background: url("https://e-commerce-vdk.s3.eu-central-1.amazonaws.com/pics/information.png")
    no-repeat;
  background-size: 90%;
  width: 100%;
  height: 100%;
}

.hint_content {
  position: absolute;
  left: 170%;
  opacity: 0;
  transition-duration: .5s;
  font-weight: normal;
}

.hint_content_inner{
    background-color: #fff;
    padding: 10px;
    border: 1px solid rgb(196, 196, 196);
    position: relative;
    display: flex;
    width: max-content;
    max-width: 20rem;
    font-size: 13px;
    color: #333;
}

.hint_content::before{
    position: absolute;
    content: '';
    width: 11px;
    height: 11px;
    background: #fff;
    border-left: 1px solid rgb(196, 196, 196);
    border-bottom: 1px solid rgb(196, 196, 196);
    top: 40%;
    left: -5px;
    transform: rotate(45deg);
    z-index: 1000;
}

.hint_icon:hover ~ .hint_content{
    opacity: 1;
}

</style>