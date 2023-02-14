<?php

abstract class Ship {
    public $name;
    private $engineStatus = "OFF";
    protected $speed = 0;

    public function __construct($name) {
        $this->name = $name;
    }

    abstract public function intro() : string;
    abstract public function increaseSpeed(int $val) : int;

    public function getEngineStatus() {
        return $this->engineStatus;
    }

    public function getSpeed() {
        return $this->speed;
    }

    public function startEngine() {
        $this->engineStatus = 'ON';
        $this->speed = 0;
        echo "The engine $this->name has been start. ";
        echo "( Status Engine: $this->engineStatus, Speed Initial : $this->speed )";
    }

    public function stopEngine() {
        $this->engineStatus = 'OFF';
        $this->speed = 0;
        echo "The engine $this->name has been stop. ";
        echo "( Status Engine: $this->engineStatus, Current Speed : $this->speed )";
    }
}

class MotorBoat extends Ship {
    public function intro() : string {
        return "The new ship has the name: $this->name!, type : Motor Boat";
    }

    public function increaseSpeed(int $val): int {
        return $this->speed += $val;
    }
}

class SailBoat extends Ship {
    public function intro() : string {
        return "The new ship has the name: $this->name!, type : Sailboat";
    }

    public function increaseSpeed(int $val): int {
        return $this->speed += $val;
    }
}

class Yacht extends Ship {
    public function intro() : string {
        return "The new ship has the name: $this->name!, type : Yacht";
    }

    public function increaseSpeed(int $val): int {
        return $this->speed += $val;
    }
}

$angsa = new MotorBoat("Angsa Biru 47");
echo $angsa->intro();
echo '<br/>';
echo $angsa->startEngine();
echo '<br/>';
echo '------------------------------------------------';
echo '<br/>';
for($i = 0; $i < 10; $i++){
    echo "$angsa->name increase speed: ".$angsa->increaseSpeed($i);
    echo '<br/>';
}
echo '------------------------------------------------';
echo '<br/>';
echo "$angsa->name speed now: ".$angsa->getSpeed();
echo '<br/>';
echo '<br/>';
echo $angsa->stopEngine();

?>