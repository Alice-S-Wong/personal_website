<template>
  <div class="home">
    <div id="wrapper">

        <!-- Header -->
          <header id="header">
            <h1>Dice Roller</h1>
          </header>

        <!-- Main -->
          <div id="main">

            <!-- Content -->
              <section id="content" class="main">
                <!-- <span class="image main"><img src="images/pic04.jpg" alt="" /></span> -->
                <p>Number of dice: <input type="text" v-model="num_dice"> Die type</p>
                <p><select type="text" v-model="die_type">
                  <option value="d4">d4</option>
                  <option value= "d6">d6</option>
                  <option value= "d10">d10</option>
                  <option value= "d12">d12</option>
                  <option value= "d20">d20</option>
                </select></p>
                <p>Bonus <input type="text" v-model="bonus"></p>
                <button v-on:click="rollDice()">Roll Dice</button>
                <button v-on:click="clearArray()">Clear Roll Data</button>
                <br>
                <br>
                <p>Result: {{result}}</p>
                <p>Roll Log</p>
                <p v-for="roll in dice_array">
                  {{roll}}
                </p>
                <ul class="actions">
                  <li><a href="/developer" class="button">Return to Developer Page</a></li>
                </ul>
              </section>
          </div>

        <!-- Footer -->
          <footer id="footer">
            <section>
              <h2>Useful Links</h2>
              <ul class="icons">
                <li><a href="https://github.com/Alice-S-Wong" class="icon brands fa-github alt"><span class="label">GitHub</span></a></li>
                <li><a href="https://www.linkedin.com/in/alice-s-wong/" class="icon brands fa-linkedin alt"><span class="label">Linkedin</span></a></li>
              </ul>
            </section>
            <p class="copyright">&copy; Untitled. Design: <a href="https://html5up.net">HTML5 UP</a>.</p>
          </footer>

      </div>
  </div>
</template>

<style>
</style>

<script>
export default {
  data: function() {
    return {
      num_dice: 1,
      die_type: "d4",
      bonus: 0,
      dice_array: [],
      result: 0
    };
  },
  created: function() {},
  methods: {
    randomNumber: function(die) {
      return Math.ceil((Math.random() * die));
    },
    rollDice: function() {
      var dieValue = 0;
      var rollArray = [];
      var i;
      var roll;
      var sum = 0;
      if (this.die_type === "d4") {
        dieValue = 4;
      } else if (this.die_type === "d6") {
        dieValue = 6;
      } else if (this.die_type === "d10") {
        dieValue = 10;
      } else if (this.die_type === "d12") {
        dieValue = 12;
      } else if (this.die_type === "d20") {
        dieValue = 20;
      }
      for (i = 0; i < (this.num_dice); i++) {
        roll = this.randomNumber(dieValue);
        rollArray.push(roll);
        sum += roll;
      }
      this.dice_array.push(rollArray);
      this.result = sum + parseInt(this.bonus);
    },
    clearArray: function() {
      this.dice_array = [];
    }
  }
};
</script>