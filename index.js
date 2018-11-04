new Vue({
	el: '#app',
  data: {
    yourLife: 100,
    monsterLife:100,
    startGame: false,
    turns: [],


  },
  methods: {

    newGame: function () {
      this.startGame =  true;
      this.yourLife = 100;
      this.monsterLife = 100;
      this.turns = [];
    },

    attack: function () {
      var damage = this.calculateDamage(3, 10);
      this.monsterLife -= damage
      this.turns.unshift({
        isPlayer: true,
        text: 'Player Hits Monster for ' + damage
      })
      if(this.checkWin()){
        return;
      }
      this.monsterAttack()
    },

    calculateDamage(min, max){
      return Math.max(Math.floor(Math.random() * max + 1), min);
    }, 

    checkWin(){
      if(this.monsterLife <= 0){
        if(confirm('You Won! New game?')){
          this.newGame();
        }else{
          this.startGame = false
        }
        return true;
      }else if(this.yourLife <= 0){
        if(confirm('You Lose! New game?')){
          this.newGame();
        }else{
          this.startGame = false;
        }
        return true;
      }
      return false
    },
    monsterAttack(){
      var damage = this.calculateDamage(5, 12)
      this.yourLife -= damage;
      this.turns.unshift({
        isPlayer: false,
        text: 'Monster Hits Player for ' + damage
      })
      this.checkWin();
    },
    specialAttack() {
      var damage = this.calculateDamage(10, 20);
      this.monsterLife -= 
      this.turns.unshift({
        isPlayer: true,
        text: 'Player Hits Monster Hard for ' + damage
      })
      if(this.checkWin()){
        return;
      }
      this.monsterAttack()
    },
    heal(){
      if(this.yourLife  <= 90){
        this.yourLife += 10;
      
      }else{
        this.yourLife = 100;
      }
      this.turns.unshift({
        isPlayer: true,
        text: 'Player Heal  for ' + 10
      })
      this.monsterAttack();
    },
    giveUp(){
      this.startGame = false;
    },
  },
 

  computed: {

  }
})
