<template>
  <div class="number-container">
    <div class="numberhd">
      <ul>
        <li>111111</li>
        <li>222222</li>
      </ul>
    </div>
    <div class="numberbd">
      <ul>
        <li>aaaaa</li>
        <li>bbbbb</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "number"
}
</script>

<style lang="less" scoped>
  .number-container{
    position: relative;
    background-color: rgba(101, 132, 226, 0.1);
    padding: 0.1875rem;
    .numberhd{
      position: relative;
      border: 1px solid rgba(25, 186, 139, 0.17);
      &::before{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 10px;
        height: 10px;
        border-top: 2px solid #02a6b5;
        border-left: 2px solid #02a6b5;
      }
      &::after{
        content: "";
        position: absolute;
        bottom: 0;
        right: 0;
        width: 10px;
        height: 10px;
        border-bottom: 2px solid #02a6b5;
        border-right: 2px solid #02a6b5;
      }
      ul{
        display: flex;
        list-style: none;
        li {
          position: relative;
          flex: 1;
          text-align: center;
          height: 1rem;
          line-height: 1rem;
          font-size: 0.875rem;
          color: #ffeb7b;
          padding: 0.05rem 0;
          font-family: "electronicFont";
          font-weight: bold;
          &:first-child::after {
            content: "";
            position: absolute;
            height: 50%;
            width: 1px;
            background: rgba(255, 255, 255, 0.2);
            right: 0;
            top: 25%;
          }
        }
      }
    }
    .numberbd {
      ul{
        display: flex;
        list-style: none;
        li {
          flex: 1;
          height: 0.5rem;
          line-height: 0.5rem;
          text-align: center;
          font-size: 0.225rem;
          color: rgba(255, 255, 255, 0.7);
          padding-top: 0.125rem;
        }
      }
    }
  }
</style>