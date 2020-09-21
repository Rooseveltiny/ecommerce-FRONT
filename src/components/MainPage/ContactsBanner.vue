<template>
<div class="section">
  <div class="contacts_banner">
    <div class="contacts_banner_inner">
        <div class="contacts_info">8(8202) 264-264</div>
    </div>
  </div>
</div>
</template>

<script>
export default {};
</script>

<style scoped>

    .contacts_banner{
        height: 250px;
        background: rgb(240,240,240);
        border: 1px solid rgb(190,190,190)
    }

    .contacts_banner_inner{
        background: url(https://e-commerce-vdk.s3.eu-central-1.amazonaws.com/pics/contacts.svg) no-repeat;
        background-size: 80%;
        height: 100%;
        background-position: 50%;
        display: flex;
        position: relative;
        justify-content: center;
        align-items: flex-end;
    }

    .contacts_info{
        position: absolute;
        font-size: 22px;
        background: rgb(230,230,230);
        padding: 5px 30px;
        border-radius: 10px 10px 0 0;
        font-weight: bold;
    }

</style>