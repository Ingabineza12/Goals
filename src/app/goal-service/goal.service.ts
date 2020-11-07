import { Injectable } from '@angular/core';
import { goals } from 'goals';


@Injectable({
  providedIn: 'root'
})
export class GoalService {

  getGoals(){
    return goals
  }
  getGoal(id){
    for (let goal of goals){
      if (goal.id == id){
        return goal;
      }
    }
  }

  constructor() { }
}

