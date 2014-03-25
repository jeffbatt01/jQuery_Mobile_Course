
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindSymbolAction(compId,symbolName,"creationComplete",function(sym,e){EC.centerStage(sym);var assetsPath="sounds/";EC.Sound.setup([{src:assetsPath+"click.mp3|"+assetsPath+"click.ogg",id:"click"},{src:assetsPath+"hover.mp3|"+assetsPath+"hover.ogg",id:"hover"},{src:assetsPath+"start_race.mp3|"+assetsPath+"start_race.ogg",id:"start_race"},{src:assetsPath+"correct.mp3|"+assetsPath+"correct.ogg",id:"correct"},{src:assetsPath+"incorrect.mp3|"+assetsPath+"incorrect.ogg",id:"incorrect"}],function()
{EC.info("Sound setup finished","DEMO");EC.Sound.play("start_race");});if((navigator.userAgent.match(/iPhone/i))||(navigator.userAgent.match(/iPad/i)))
{for(var i=0;i<20;i++)
{sym.getSymbol("Question_"+(i+1)+"_Content").$("Answer_A").unbind("mouseup");sym.getSymbol("Question_"+(i+1)+"_Content").$("Answer_B").unbind("mouseup");sym.getSymbol("Question_"+(i+1)+"_Content").$("Answer_C").unbind("mouseup");sym.getSymbol("Question_"+(i+1)+"_Content").$("Answer_D").unbind("mouseup");sym.getSymbol("Question_"+(i+1)+"_Content").getSymbol("Answer_A").$("Answer_"+(i+1)+"_Trigger").unbind("mouseup");sym.getSymbol("Question_"+(i+1)+"_Content").getSymbol("Answer_A").$("Answer_"+(i+1)+"_Trigger").unbind("mousedown");sym.getSymbol("Question_"+(i+1)+"_Content").getSymbol("Answer_A").$("Answer_"+(i+1)+"_Trigger").unbind("mouseout");sym.getSymbol("Question_"+(i+1)+"_Content").getSymbol("Answer_A").$("Answer_"+(i+1)+"_Trigger").unbind("mouseover");sym.getSymbol("Question_"+(i+1)+"_Content").getSymbol("Answer_B").$("Answer_"+(i+1)+"_Trigger").unbind("mouseup");sym.getSymbol("Question_"+(i+1)+"_Content").getSymbol("Answer_B").$("Answer_"+(i+1)+"_Trigger").unbind("mousedown");sym.getSymbol("Question_"+(i+1)+"_Content").getSymbol("Answer_B").$("Answer_"+(i+1)+"_Trigger").unbind("mouseout");sym.getSymbol("Question_"+(i+1)+"_Content").getSymbol("Answer_B").$("Answer_"+(i+1)+"_Trigger").unbind("mouseover");sym.getSymbol("Question_"+(i+1)+"_Content").getSymbol("Answer_C").$("Answer_"+(i+1)+"_Trigger").unbind("mouseup");sym.getSymbol("Question_"+(i+1)+"_Content").getSymbol("Answer_C").$("Answer_"+(i+1)+"_Trigger").unbind("mousedown");sym.getSymbol("Question_"+(i+1)+"_Content").getSymbol("Answer_C").$("Answer_"+(i+1)+"_Trigger").unbind("mouseout");sym.getSymbol("Question_"+(i+1)+"_Content").getSymbol("Answer_C").$("Answer_"+(i+1)+"_Trigger").unbind("mouseover");sym.getSymbol("Question_"+(i+1)+"_Content").getSymbol("Answer_D").$("Answer_"+(i+1)+"_Trigger").unbind("mouseup");sym.getSymbol("Question_"+(i+1)+"_Content").getSymbol("Answer_D").$("Answer_"+(i+1)+"_Trigger").unbind("mousedown");sym.getSymbol("Question_"+(i+1)+"_Content").getSymbol("Answer_D").$("Answer_"+(i+1)+"_Trigger").unbind("mouseout");sym.getSymbol("Question_"+(i+1)+"_Content").getSymbol("Answer_D").$("Answer_"+(i+1)+"_Trigger").unbind("mouseover");}
sym.$("Continue_Button").unbind("mouseup");sym.getSymbol("Continue_Button").$("play_again_trigger").unbind("mouseup");sym.getSymbol("Continue_Button").$("play_again_trigger").unbind("mousedown");sym.getSymbol("Continue_Button").$("play_again_trigger").unbind("mouseout");sym.getSymbol("Continue_Button").$("play_again_trigger").unbind("mouseover");sym.$("Play_Again_Button").unbind("mouseup");sym.getSymbol("Play_Again_Button").$("play_again_trigger").unbind("mouseup");sym.getSymbol("Play_Again_Button").$("play_again_trigger").unbind("mousedown");sym.getSymbol("Play_Again_Button").$("play_again_trigger").unbind("mouseout");sym.getSymbol("Play_Again_Button").$("play_again_trigger").unbind("mouseover");sym.getSymbol("Game_Board").getSymbol("Lose_Points").$("Continue_BTN").unbind("mouseup");sym.getSymbol("Game_Board").getSymbol("Lose_Points").getSymbol("Continue_BTN").$("play_again_trigger").unbind("mouseup");sym.getSymbol("Game_Board").getSymbol("Lose_Points").getSymbol("Continue_BTN").$("play_again_trigger").unbind("mousedown");sym.getSymbol("Game_Board").getSymbol("Lose_Points").getSymbol("Continue_BTN").$("play_again_trigger").unbind("mouseout");sym.getSymbol("Game_Board").getSymbol("Lose_Points").getSymbol("Continue_BTN").$("play_again_trigger").unbind("mouseover");sym.getSymbol("Game_Board").getSymbol("Card").$("Card_Trigger").unbind("mouseup");sym.getSymbol("Game_Board").getSymbol("Card").$("Card_Trigger").unbind("mousedown");sym.getSymbol("Game_Board").getSymbol("Card").$("Card_Trigger").unbind("mouseout");sym.getSymbol("Game_Board").getSymbol("Card").$("Card_Trigger").unbind("mouseover");sym.getSymbol("Game_Board").getSymbol("Dice").$("Dice_Trigger").unbind("mouseup");sym.getSymbol("Game_Board").getSymbol("Dice").$("Dice_Trigger").unbind("mousedown");sym.getSymbol("Game_Board").getSymbol("Dice").$("Dice_Trigger").unbind("mouseout");sym.getSymbol("Game_Board").getSymbol("Dice").$("Dice_Trigger").unbind("mouseover");for(j=1;j<=4;j++)
{sym.getSymbol("Instruction").$("avatar_"+j).unbind("mouseup");sym.getSymbol("Instruction").$("avatar_"+j).unbind("mouseover");}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Continue_Button}","mouseup",function(sym,e){EC.Sound.stop();sym.stop("Instructions");EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Continue_Button}","touchend",function(sym,e){EC.Sound.stop();sym.stop("Instructions");EC.Sound.play("click");var Button_Box_1=sym.getSymbol("Button_Box_1");Button_Box_1.$("Box_Trigger").unbind("mouseover");Button_Box_1.$("Box_Trigger").unbind("mouseout");Button_Box_1.$("Box_Trigger").unbind("mouseup");var Button_Box_2=sym.getSymbol("Button_Box_2");Button_Box_2.$("Box_Trigger").unbind("mouseover");Button_Box_2.$("Box_Trigger").unbind("mouseout");Button_Box_2.$("Box_Trigger").unbind("mouseup");var Button_Box_3=sym.getSymbol("Button_Box_3");Button_Box_3.$("Box_Trigger").unbind("mouseover");Button_Box_3.$("Box_Trigger").unbind("mouseout");Button_Box_3.$("Box_Trigger").unbind("mouseup");var Button_Box_4=sym.getSymbol("Button_Box_4");Button_Box_4.$("Box_Trigger").unbind("mouseover");Button_Box_4.$("Box_Trigger").unbind("mouseout");Button_Box_4.$("Box_Trigger").unbind("mouseup");var Button_Box_5=sym.getSymbol("Button_Box_5");Button_Box_5.$("Box_Trigger").unbind("mouseover");Button_Box_5.$("Box_Trigger").unbind("mouseout");Button_Box_5.$("Box_Trigger").unbind("mouseup");var Button_Box_6=sym.getSymbol("Button_Box_6");Button_Box_6.$("Box_Trigger").unbind("mouseover");Button_Box_6.$("Box_Trigger").unbind("mouseout");Button_Box_6.$("Box_Trigger").unbind("mouseup");var Button_Box_7=sym.getSymbol("Button_Box_7");Button_Box_7.$("Box_Trigger").unbind("mouseover");Button_Box_7.$("Box_Trigger").unbind("mouseout");Button_Box_7.$("Box_Trigger").unbind("mouseup");var Button_Box_8=sym.getSymbol("Button_Box_8");Button_Box_8.$("Box_Trigger").unbind("mouseover");Button_Box_8.$("Box_Trigger").unbind("mouseout");Button_Box_8.$("Box_Trigger").unbind("mouseup");var Button_Box_9=sym.getSymbol("Button_Box_9");Button_Box_9.$("Box_Trigger").unbind("mouseover");Button_Box_9.$("Box_Trigger").unbind("mouseout");Button_Box_9.$("Box_Trigger").unbind("mouseup");var Button_Box_10=sym.getSymbol("Button_Box_10");Button_Box_10.$("Box_Trigger").unbind("mouseover");Button_Box_10.$("Box_Trigger").unbind("mouseout");Button_Box_10.$("Box_Trigger").unbind("mouseup");var Button_Box_11=sym.getSymbol("Button_Box_11");Button_Box_11.$("Box_Trigger").unbind("mouseover");Button_Box_11.$("Box_Trigger").unbind("mouseout");Button_Box_11.$("Box_Trigger").unbind("mouseup");var Button_Box_12=sym.getSymbol("Button_Box_12");Button_Box_12.$("Box_Trigger").unbind("mouseover");Button_Box_12.$("Box_Trigger").unbind("mouseout");Button_Box_12.$("Box_Trigger").unbind("mouseup");var Button_Box_13=sym.getSymbol("Button_Box_13");Button_Box_13.$("Box_Trigger").unbind("mouseover");Button_Box_13.$("Box_Trigger").unbind("mouseout");Button_Box_13.$("Box_Trigger").unbind("mouseup");var Button_Box_14=sym.getSymbol("Button_Box_14");Button_Box_14.$("Box_Trigger").unbind("mouseover");Button_Box_14.$("Box_Trigger").unbind("mouseout");Button_Box_14.$("Box_Trigger").unbind("mouseup");var Button_Box_15=sym.getSymbol("Button_Box_15");Button_Box_15.$("Box_Trigger").unbind("mouseover");Button_Box_15.$("Box_Trigger").unbind("mouseout");Button_Box_15.$("Box_Trigger").unbind("mouseup");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Play_Again_Button}","mouseup",function(sym,e){sym.stop("Title");EC.Sound.play("start_race");sym.setVariable("score",0);sym.setVariable("questionCtr",0);sym.setVariable("rollCtr",0);sym.setVariable("stopPosition",0);sym.setVariable("interval");sym.setVariable("playCtrInterval",0);sym.setVariable("addScore",0);sym.setVariable("isResetPoints",false);sym.$("score_txt").html("0");sym.$("Question_Counter").hide();sym.getSymbol("Game_Board").stop(0);sym.getSymbol("Game_Board").getSymbol("Card").stop("Disabled");sym.getSymbol("Game_Board").getSymbol("Card").$("cursor").hide();sym.getSymbol("Game_Board").getSymbol("Card").$("Card_Trigger").hide();sym.getSymbol("Game_Board").getSymbol("Dice").stop("Up");sym.getSymbol("Game_Board").getSymbol("Dice").$("Cursor").show();sym.getSymbol("Game_Board").getSymbol("Dice").$("Dice_Trigger").show();sym.$("Question_Counter").hide();sym.getSymbol("Game_Board").$("Lose_Points").hide();var arrQues20=[1,1,1,1,1,1,2,2,2,2,2,3,3,3,3,3,4,4,4,5];var arrQues19=[1,1,1,1,1,1,1,1,1,2,2,3,3,3,4,5,5,6,6];var arrQues18=[1,1,1,1,1,1,2,2,2,2,3,3,4,4,4,5,5,6];var arrQues17=[1,1,1,1,2,2,2,2,3,3,3,3,4,4,5,5,6];var arrQues16=[1,1,2,2,2,2,2,3,3,3,3,4,4,5,5,6];var arrQues15=[1,1,2,2,2,3,3,3,3,3,4,4,5,6,6];var arrQues14=[1,1,2,2,3,3,3,3,4,4,5,5,6,6];var arrQues13=[1,1,2,2,3,3,4,5,5,5,5,6,6];var arrQues12=[1,1,2,3,4,4,5,5,5,6,6,6];var arrQues11=[1,2,3,4,4,5,5,6,6,6,6];var arrQues10=[1,2,4,5,6,6,6,6,6,6];var arrQues9=[3,4,5,6,6,6,6,6,6];var arrQues8=[6,6,6,6,6,6,6,6];var possibleAnswerArray=[arrQues20,arrQues19,arrQues18,arrQues17,arrQues16,arrQues15,arrQues14,arrQues13,arrQues12,arrQues11,arrQues10,arrQues9,arrQues8];if(sym.getVariable("NumberOfQuestions")<8)
{sym.setVariable("NumberOfQuestions",8)}
var NumberOfQuestions=sym.getVariable("NumberOfQuestions");for(var i=0;i<possibleAnswerArray.length;i++)
{if(possibleAnswerArray[i].length==NumberOfQuestions)
{var arrQues=possibleAnswerArray[i];}}
sym.setVariable("arrQues20",arrQues);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Play_Again_Button}","touchend",function(sym,e){sym.stop("Title");EC.Sound.play("start_race");sym.setVariable("score",0);sym.setVariable("questionCtr",0);sym.setVariable("rollCtr",0);sym.setVariable("stopPosition",0);sym.setVariable("interval");sym.setVariable("playCtrInterval",0);sym.setVariable("addScore",0);sym.setVariable("isResetPoints",false);sym.$("score_txt").html("0");sym.$("Question_Counter").hide();sym.getSymbol("Game_Board").stop(0);sym.getSymbol("Game_Board").getSymbol("Card").stop("Disabled");sym.getSymbol("Game_Board").getSymbol("Card").$("cursor").hide();sym.getSymbol("Game_Board").getSymbol("Card").$("Card_Trigger").hide();sym.getSymbol("Game_Board").getSymbol("Dice").stop("Up");sym.getSymbol("Game_Board").getSymbol("Dice").$("Cursor").show();sym.getSymbol("Game_Board").getSymbol("Dice").$("Dice_Trigger").show();sym.$("Question_Counter").hide();sym.getSymbol("Game_Board").$("Lose_Points").hide();var arrQues20=[1,1,1,1,1,1,2,2,2,2,2,3,3,3,3,3,4,4,4,5];var arrQues19=[1,1,1,1,1,1,1,1,1,2,2,3,3,3,4,5,5,6,6];var arrQues18=[1,1,1,1,1,1,2,2,2,2,3,3,4,4,4,5,5,6];var arrQues17=[1,1,1,1,2,2,2,2,3,3,3,3,4,4,5,5,6];var arrQues16=[1,1,2,2,2,2,2,3,3,3,3,4,4,5,5,6];var arrQues15=[1,1,2,2,2,3,3,3,3,3,4,4,5,6,6];var arrQues14=[1,1,2,2,3,3,3,3,4,4,5,5,6,6];var arrQues13=[1,1,2,2,3,3,4,5,5,5,5,6,6];var arrQues12=[1,1,2,3,4,4,5,5,5,6,6,6];var arrQues11=[1,2,3,4,4,5,5,6,6,6,6];var arrQues10=[1,2,4,5,6,6,6,6,6,6];var arrQues9=[3,4,5,6,6,6,6,6,6];var arrQues8=[6,6,6,6,6,6,6,6];var possibleAnswerArray=[arrQues20,arrQues19,arrQues18,arrQues17,arrQues16,arrQues15,arrQues14,arrQues13,arrQues12,arrQues11,arrQues10,arrQues9,arrQues8];if(sym.getVariable("NumberOfQuestions")<8)
{sym.setVariable("NumberOfQuestions",8)}
var NumberOfQuestions=sym.getVariable("NumberOfQuestions");for(var i=0;i<possibleAnswerArray.length;i++)
{if(possibleAnswerArray[i].length==NumberOfQuestions)
{var arrQues=possibleAnswerArray[i];}}
sym.setVariable("arrQues20",arrQues);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){sym.setVariable("NumberOfQuestions",20);sym.setVariable("score",0);sym.setVariable("questionCtr",0);sym.setVariable("rollCtr",0);sym.setVariable("stopPosition",0);sym.setVariable("interval");sym.setVariable("playCtrInterval",0);sym.setVariable("addScore",0);sym.setVariable("isResetPoints",false);sym.getSymbol("Game_Board").getSymbol("Card").stop("Disabled");sym.getSymbol("Game_Board").getSymbol("Card").$("cursor").hide();sym.getSymbol("Game_Board").getSymbol("Card").$("Card_Trigger").hide();sym.$("Question_Counter").hide();sym.getSymbol("Game_Board").$("Lose_Points").hide();var arrQues20=[1,1,1,1,1,1,2,2,2,2,2,3,3,3,3,3,4,4,4,5];var arrQues19=[1,1,1,1,1,1,1,1,1,2,2,3,3,3,4,5,5,6,6];var arrQues18=[1,1,1,1,1,1,2,2,2,2,3,3,4,4,4,5,5,6];var arrQues17=[1,1,1,1,2,2,2,2,3,3,3,3,4,4,5,5,6];var arrQues16=[1,1,2,2,2,2,2,3,3,3,3,4,4,5,5,6];var arrQues15=[1,1,2,2,2,3,3,3,3,3,4,4,5,6,6];var arrQues14=[1,1,2,2,3,3,3,3,4,4,5,5,6,6];var arrQues13=[1,1,2,2,3,3,4,5,5,5,5,6,6];var arrQues12=[1,1,2,3,4,4,5,5,5,6,6,6];var arrQues11=[1,2,3,4,4,5,5,6,6,6,6];var arrQues10=[1,2,4,5,6,6,6,6,6,6];var arrQues9=[3,4,5,6,6,6,6,6,6];var arrQues8=[6,6,6,6,6,6,6,6];var possibleAnswerArray=[arrQues20,arrQues19,arrQues18,arrQues17,arrQues16,arrQues15,arrQues14,arrQues13,arrQues12,arrQues11,arrQues10,arrQues9,arrQues8];if(sym.getVariable("NumberOfQuestions")<8)
{sym.setVariable("NumberOfQuestions",8)}
var NumberOfQuestions=sym.getVariable("NumberOfQuestions");for(var i=0;i<possibleAnswerArray.length;i++)
{if(possibleAnswerArray[i].length==NumberOfQuestions)
{var arrQues=possibleAnswerArray[i];}}
sym.setVariable("arrQues20",arrQues);});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'Continue_Button'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_play_again_trigger}","mouseover",function(sym,e){sym.stop("Hover");EC.Sound.play("hover");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_play_again_trigger}","mouseup",function(sym,e){sym.stop("Hover");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_play_again_trigger}","mouseout",function(sym,e){sym.stop("Normal");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_play_again_trigger}","mousedown",function(sym,e){sym.stop("Hover");EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_play_again_trigger}","touchstart",function(sym,e){sym.stop("Down");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_play_again_trigger}","touchend",function(sym,e){sym.stop("Normal");});
//Edge binding end
})("_Continue_Button");
//Edge symbol end:'_Continue_Button'

//=========================================================

//Edge symbol: 'z_Question_Bg'
(function(symbolName){})("Question_01");
//Edge symbol end:'Question_01'

//=========================================================

//Edge symbol: 'Question_Bg'
(function(symbolName){})("_Question_Bg");
//Edge symbol end:'_Question_Bg'

//=========================================================

//Edge symbol: 'Question_2'
(function(symbolName){})("Question_02");
//Edge symbol end:'Question_02'

//=========================================================

//Edge symbol: 'correct_incorrect_screen'
(function(symbolName){})("Question_01_Correct_Feedback");
//Edge symbol end:'Question_01_Correct_Feedback'

//=========================================================

//Edge symbol: 'z_Text_Background'
(function(symbolName){})("_Text_Background");
//Edge symbol end:'_Text_Background'

//=========================================================

//Edge symbol: 'z_Outer_Background'
(function(symbolName){})("_Outer_Background");
//Edge symbol end:'_Outer_Background'

//=========================================================

//Edge symbol: 'correct_incorrect_screen_1'
(function(symbolName){})("Question_01_Incorrect_Feedback");
//Edge symbol end:'Question_01_Incorrect_Feedback'

//=========================================================

//Edge symbol: 'Question_3'
(function(symbolName){})("Question_03");
//Edge symbol end:'Question_03'

//=========================================================

//Edge symbol: 'Question_4'
(function(symbolName){})("Question_04");
//Edge symbol end:'Question_04'

//=========================================================

//Edge symbol: 'Question_5'
(function(symbolName){})("Question_05");
//Edge symbol end:'Question_05'

//=========================================================

//Edge symbol: 'Question_6'
(function(symbolName){})("Question_06");
//Edge symbol end:'Question_06'

//=========================================================

//Edge symbol: 'Question_7'
(function(symbolName){})("Question_07");
//Edge symbol end:'Question_07'

//=========================================================

//Edge symbol: 'Question_8'
(function(symbolName){})("Question_08");
//Edge symbol end:'Question_08'

//=========================================================

//Edge symbol: 'Question_9'
(function(symbolName){})("Question_09");
//Edge symbol end:'Question_09'

//=========================================================

//Edge symbol: 'Question_10'
(function(symbolName){})("Question_10");
//Edge symbol end:'Question_10'

//=========================================================

//Edge symbol: 'Question_11'
(function(symbolName){})("Question_11");
//Edge symbol end:'Question_11'

//=========================================================

//Edge symbol: 'Question_12'
(function(symbolName){})("Question_12");
//Edge symbol end:'Question_12'

//=========================================================

//Edge symbol: 'Question_13'
(function(symbolName){})("Question_13");
//Edge symbol end:'Question_13'

//=========================================================

//Edge symbol: 'Question_14'
(function(symbolName){})("Question_14");
//Edge symbol end:'Question_14'

//=========================================================

//Edge symbol: 'Question_15'
(function(symbolName){})("Question_15");
//Edge symbol end:'Question_15'

//=========================================================

//Edge symbol: 'z_Btn_Answer_Up_State'
(function(symbolName){})("_BTN_Answer_Up_State");
//Edge symbol end:'_BTN_Answer_Up_State'

//=========================================================

//Edge symbol: 'z_Btn_Answer_Over_State'
(function(symbolName){})("_BTN_Answer_Over_State");
//Edge symbol end:'_BTN_Answer_Over_State'

//=========================================================

//Edge symbol: 'z_Btn_Answer_Down_State'
(function(symbolName){})("_BTN_Answer_Down_State");
//Edge symbol end:'_BTN_Answer_Down_State'

//=========================================================

//Edge symbol: 'Answer_1_a_1'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseover",function(sym,e){EC.Sound.play("hover");sym.stop("Over");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mousedown",function(sym,e){sym.stop("Down");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseup",function(sym,e){sym.stop("Over");EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseout",function(sym,e){sym.stop("Up");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchend",function(sym,e){EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchstart",function(sym,e){sym.stop("Down");});
//Edge binding end
})("_Question_02_Answer_A");
//Edge symbol end:'_Question_02_Answer_A'

//=========================================================

//Edge symbol: 'Answer_1_b_1'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseover",function(sym,e){EC.Sound.play("hover");sym.stop("Over");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mousedown",function(sym,e){sym.stop("Down");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseup",function(sym,e){sym.stop("Over");EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseout",function(sym,e){sym.stop("Up");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchend",function(sym,e){EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchstart",function(sym,e){sym.stop("Down");});
//Edge binding end
})("_Question_02_Answer_B");
//Edge symbol end:'_Question_02_Answer_B'

//=========================================================

//Edge symbol: 'Answer_1_c_1'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseover",function(sym,e){EC.Sound.play("hover");sym.stop("Over");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mousedown",function(sym,e){sym.stop("Down");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseup",function(sym,e){sym.stop("Over");EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseout",function(sym,e){sym.stop("Up");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchend",function(sym,e){EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchstart",function(sym,e){sym.stop("Down");});
//Edge binding end
})("_Question_02_Answer_C");
//Edge symbol end:'_Question_02_Answer_C'

//=========================================================

//Edge symbol: 'Answer_1_d_1'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseover",function(sym,e){EC.Sound.play("hover");sym.stop("Over");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mousedown",function(sym,e){sym.stop("Down");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseup",function(sym,e){sym.stop("Over");EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseout",function(sym,e){sym.stop("Up");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchend",function(sym,e){EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchstart",function(sym,e){sym.stop("Down");});
//Edge binding end
})("_Question_02_Answer_D");
//Edge symbol end:'_Question_02_Answer_D'

//=========================================================

//Edge symbol: 'correct_screen_2'
(function(symbolName){})("Question_02_Correct_Feedback");
//Edge symbol end:'Question_02_Correct_Feedback'

//=========================================================

//Edge symbol: 'correct_screen_3'
(function(symbolName){})("Question_03_Correct_Feedback");
//Edge symbol end:'Question_03_Correct_Feedback'

//=========================================================

//Edge symbol: 'correct_screen_4'
(function(symbolName){})("Question_04_Correct_Feedback");
//Edge symbol end:'Question_04_Correct_Feedback'

//=========================================================

//Edge symbol: 'correct_screen_5'
(function(symbolName){})("Question_05_Correct_Feedback");
//Edge symbol end:'Question_05_Correct_Feedback'

//=========================================================

//Edge symbol: 'correct_screen_6'
(function(symbolName){})("Question_06_Correct_Feedback");
//Edge symbol end:'Question_06_Correct_Feedback'

//=========================================================

//Edge symbol: 'correct_screen_7'
(function(symbolName){})("Question_07_Correct_Feedback");
//Edge symbol end:'Question_07_Correct_Feedback'

//=========================================================

//Edge symbol: 'correct_screen_8'
(function(symbolName){})("Question_08_Correct_Feedback");
//Edge symbol end:'Question_08_Correct_Feedback'

//=========================================================

//Edge symbol: 'correct_screen_9'
(function(symbolName){})("Question_09_Correct_Feedback");
//Edge symbol end:'Question_09_Correct_Feedback'

//=========================================================

//Edge symbol: 'correct_screen_10'
(function(symbolName){})("Question_10_Correct_Feedback");
//Edge symbol end:'Question_10_Correct_Feedback'

//=========================================================

//Edge symbol: 'correct_screen_11'
(function(symbolName){})("Question_11_Correct_Feedback");
//Edge symbol end:'Question_11_Correct_Feedback'

//=========================================================

//Edge symbol: 'correct_screen_12'
(function(symbolName){})("Question_12_Correct_Feedback");
//Edge symbol end:'Question_12_Correct_Feedback'

//=========================================================

//Edge symbol: 'correct_screen_13'
(function(symbolName){})("Question_13_Correct_Feedback");
//Edge symbol end:'Question_13_Correct_Feedback'

//=========================================================

//Edge symbol: 'correct_screen_14'
(function(symbolName){})("Question_14_Correct_Feedback");
//Edge symbol end:'Question_14_Correct_Feedback'

//=========================================================

//Edge symbol: 'correct_screen_15'
(function(symbolName){})("Question_15_Correct_Feedback");
//Edge symbol end:'Question_15_Correct_Feedback'

//=========================================================

//Edge symbol: 'incorrect_screen_2'
(function(symbolName){})("Question_02_Incorrect_Feedback");
//Edge symbol end:'Question_02_Incorrect_Feedback'

//=========================================================

//Edge symbol: 'incorrect_screen_3'
(function(symbolName){})("Question_03_Incorrect_Feedback");
//Edge symbol end:'Question_03_Incorrect_Feedback'

//=========================================================

//Edge symbol: 'incorrect_screen_4'
(function(symbolName){})("Question_04_Incorrect_Feedback");
//Edge symbol end:'Question_04_Incorrect_Feedback'

//=========================================================

//Edge symbol: 'incorrect_screen_5'
(function(symbolName){})("Question_05_Incorrect_Feedback");
//Edge symbol end:'Question_05_Incorrect_Feedback'

//=========================================================

//Edge symbol: 'incorrect_screen_6'
(function(symbolName){})("Question_06_Incorrect_Feedback");
//Edge symbol end:'Question_06_Incorrect_Feedback'

//=========================================================

//Edge symbol: 'incorrect_screen_7'
(function(symbolName){})("Question_07_Incorrect_Feedback");
//Edge symbol end:'Question_07_Incorrect_Feedback'

//=========================================================

//Edge symbol: 'incorrect_screen_8'
(function(symbolName){})("Question_08_Incorrect_Feedback");
//Edge symbol end:'Question_08_Incorrect_Feedback'

//=========================================================

//Edge symbol: 'incorrect_screen_9'
(function(symbolName){})("Question_09_Incorrect_Feedback");
//Edge symbol end:'Question_09_Incorrect_Feedback'

//=========================================================

//Edge symbol: 'incorrect_screen_10'
(function(symbolName){})("Question_10_Incorrect_Feedback");
//Edge symbol end:'Question_10_Incorrect_Feedback'

//=========================================================

//Edge symbol: 'incorrect_screen_11'
(function(symbolName){})("Question_11_Incorrect_Feedback");
//Edge symbol end:'Question_11_Incorrect_Feedback'

//=========================================================

//Edge symbol: 'incorrect_screen_12'
(function(symbolName){})("Question_12_Incorrect_Feedback");
//Edge symbol end:'Question_12_Incorrect_Feedback'

//=========================================================

//Edge symbol: 'incorrect_screen_13'
(function(symbolName){})("Question_13_Incorrect_Feedback");
//Edge symbol end:'Question_13_Incorrect_Feedback'

//=========================================================

//Edge symbol: 'incorrect_screen_14'
(function(symbolName){})("Question_14_Incorrect_Feedback");
//Edge symbol end:'Question_14_Incorrect_Feedback'

//=========================================================

//Edge symbol: 'incorrect_screen_15'
(function(symbolName){})("Question_15_Incorrect_Feedback");
//Edge symbol end:'Question_15_Incorrect_Feedback'

//=========================================================

//Edge symbol: 'Answer_2_a_1'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseover",function(sym,e){EC.Sound.play("hover");sym.stop("Over");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mousedown",function(sym,e){sym.stop("Down");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseup",function(sym,e){sym.stop("Over");EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseout",function(sym,e){sym.stop("Up");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchend",function(sym,e){EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchstart",function(sym,e){sym.stop("Down");});
//Edge binding end
})("_Question_03_Answer_A");
//Edge symbol end:'_Question_03_Answer_A'

//=========================================================

//Edge symbol: 'Answer_2_b_1'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseover",function(sym,e){EC.Sound.play("hover");sym.stop("Over");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mousedown",function(sym,e){sym.stop("Down");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseup",function(sym,e){sym.stop("Over");EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseout",function(sym,e){sym.stop("Up");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchend",function(sym,e){EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchstart",function(sym,e){sym.stop("Down");});
//Edge binding end
})("_Question_03_Answer_B");
//Edge symbol end:'_Question_03_Answer_B'

//=========================================================

//Edge symbol: 'Answer_2_c_1'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseover",function(sym,e){EC.Sound.play("hover");sym.stop("Over");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mousedown",function(sym,e){sym.stop("Down");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseup",function(sym,e){sym.stop("Over");EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseout",function(sym,e){sym.stop("Up");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchend",function(sym,e){EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchstart",function(sym,e){sym.stop("Down");});
//Edge binding end
})("_Question_03_Answer_C");
//Edge symbol end:'_Question_03_Answer_C'

//=========================================================

//Edge symbol: 'Answer_2_d_1'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseover",function(sym,e){EC.Sound.play("hover");sym.stop("Over");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mousedown",function(sym,e){sym.stop("Down");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseup",function(sym,e){sym.stop("Over");EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseout",function(sym,e){sym.stop("Up");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchend",function(sym,e){EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchstart",function(sym,e){sym.stop("Down");});
//Edge binding end
})("_Question_03_Answer_D");
//Edge symbol end:'_Question_03_Answer_D'

//=========================================================

//Edge symbol: 'Answer_3_a_1'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseover",function(sym,e){EC.Sound.play("hover");sym.stop("Over");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mousedown",function(sym,e){sym.stop("Down");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseup",function(sym,e){sym.stop("Over");EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseout",function(sym,e){sym.stop("Up");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchend",function(sym,e){EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchstart",function(sym,e){sym.stop("Down");});
//Edge binding end
})("_Question_04_Answer_A");
//Edge symbol end:'_Question_04_Answer_A'

//=========================================================

//Edge symbol: 'Answer_3_b_1'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseover",function(sym,e){EC.Sound.play("hover");sym.stop("Over");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mousedown",function(sym,e){sym.stop("Down");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseup",function(sym,e){sym.stop("Over");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","click",function(sym,e){EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseout",function(sym,e){sym.stop("Up");});
//Edge binding end
})("_Question_04_Answer_B");
//Edge symbol end:'_Question_04_Answer_B'

//=========================================================

//Edge symbol: 'Answer_3_c_1'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseover",function(sym,e){EC.Sound.play("hover");sym.stop("Over");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mousedown",function(sym,e){sym.stop("Down");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseup",function(sym,e){sym.stop("Over");EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseout",function(sym,e){sym.stop("Up");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchend",function(sym,e){EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchstart",function(sym,e){sym.stop("Down");});
//Edge binding end
})("_Question_04_Answer_C");
//Edge symbol end:'_Question_04_Answer_C'

//=========================================================

//Edge symbol: 'Answer_3_d_1'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseover",function(sym,e){EC.Sound.play("hover");sym.stop("Over");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mousedown",function(sym,e){sym.stop("Down");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseup",function(sym,e){sym.stop("Over");EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseout",function(sym,e){sym.stop("Up");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchend",function(sym,e){EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchstart",function(sym,e){sym.stop("Down");});
//Edge binding end
})("_Question_04_Answer_D");
//Edge symbol end:'_Question_04_Answer_D'

//=========================================================

//Edge symbol: 'Answer_4_a_1'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseover",function(sym,e){EC.Sound.play("hover");sym.stop("Over");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mousedown",function(sym,e){sym.stop("Down");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseup",function(sym,e){sym.stop("Over");EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseout",function(sym,e){sym.stop("Up");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchend",function(sym,e){EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchstart",function(sym,e){sym.stop("Down");});
//Edge binding end
})("_Question_05_Answer_A");
//Edge symbol end:'_Question_05_Answer_A'

//=========================================================

//Edge symbol: 'Answer_4_b_1'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseover",function(sym,e){EC.Sound.play("hover");sym.stop("Over");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mousedown",function(sym,e){sym.stop("Down");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseup",function(sym,e){sym.stop("Over");EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseout",function(sym,e){sym.stop("Up");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchend",function(sym,e){EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchstart",function(sym,e){sym.stop("Down");});
//Edge binding end
})("_Question_05_Answer_B");
//Edge symbol end:'_Question_05_Answer_B'

//=========================================================

//Edge symbol: 'Answer_4_c_1'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseover",function(sym,e){EC.Sound.play("hover");sym.stop("Over");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mousedown",function(sym,e){sym.stop("Down");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseup",function(sym,e){sym.stop("Over");EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseout",function(sym,e){sym.stop("Up");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchend",function(sym,e){EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchstart",function(sym,e){sym.stop("Down");});
//Edge binding end
})("_Question_05_Answer_C");
//Edge symbol end:'_Question_05_Answer_C'

//=========================================================

//Edge symbol: 'Answer_4_d_1'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseover",function(sym,e){EC.Sound.play("hover");sym.stop("Over");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mousedown",function(sym,e){sym.stop("Down");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseup",function(sym,e){sym.stop("Over");EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseout",function(sym,e){sym.stop("Up");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchend",function(sym,e){EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchstart",function(sym,e){sym.stop("Down");});
//Edge binding end
})("_Question_05_Answer_D");
//Edge symbol end:'_Question_05_Answer_D'

//=========================================================

//Edge symbol: 'Answer_5_a_1'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseover",function(sym,e){EC.Sound.play("hover");sym.stop("Over");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mousedown",function(sym,e){sym.stop("Down");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseup",function(sym,e){sym.stop("Over");EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseout",function(sym,e){sym.stop("Up");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchend",function(sym,e){EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchstart",function(sym,e){sym.stop("Down");});
//Edge binding end
})("_Question_06_Answer_A");
//Edge symbol end:'_Question_06_Answer_A'

//=========================================================

//Edge symbol: 'Answer_5_b_1'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseover",function(sym,e){EC.Sound.play("hover");sym.stop("Over");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mousedown",function(sym,e){sym.stop("Down");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseup",function(sym,e){sym.stop("Over");EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseout",function(sym,e){sym.stop("Up");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchend",function(sym,e){EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchstart",function(sym,e){sym.stop("Down");});
//Edge binding end
})("_Question_06_Answer_B");
//Edge symbol end:'_Question_06_Answer_B'

//=========================================================

//Edge symbol: 'Answer_5_c_1'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseover",function(sym,e){EC.Sound.play("hover");sym.stop("Over");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mousedown",function(sym,e){sym.stop("Down");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseup",function(sym,e){sym.stop("Over");EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseout",function(sym,e){sym.stop("Up");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchend",function(sym,e){EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchstart",function(sym,e){sym.stop("Down");});
//Edge binding end
})("_Question_06_Answer_C");
//Edge symbol end:'_Question_06_Answer_C'

//=========================================================

//Edge symbol: 'Answer_5_d_1'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseover",function(sym,e){EC.Sound.play("hover");sym.stop("Over");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mousedown",function(sym,e){sym.stop("Down");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseup",function(sym,e){sym.stop("Over");EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseout",function(sym,e){sym.stop("Up");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchend",function(sym,e){EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchstart",function(sym,e){sym.stop("Down");});
//Edge binding end
})("_Question_06_Answer_D");
//Edge symbol end:'_Question_06_Answer_D'

//=========================================================

//Edge symbol: 'Answer_6_a_1'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseover",function(sym,e){EC.Sound.play("hover");sym.stop("Over");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mousedown",function(sym,e){sym.stop("Down");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseup",function(sym,e){sym.stop("Over");EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseout",function(sym,e){sym.stop("Up");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchend",function(sym,e){EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchstart",function(sym,e){sym.stop("Down");});
//Edge binding end
})("_Question_07_Answer_A");
//Edge symbol end:'_Question_07_Answer_A'

//=========================================================

//Edge symbol: 'Answer_6_b_1'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseover",function(sym,e){EC.Sound.play("hover");sym.stop("Over");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mousedown",function(sym,e){sym.stop("Down");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseup",function(sym,e){sym.stop("Over");EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseout",function(sym,e){sym.stop("Up");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchend",function(sym,e){EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchstart",function(sym,e){sym.stop("Down");});
//Edge binding end
})("_Question_07_Answer_B");
//Edge symbol end:'_Question_07_Answer_B'

//=========================================================

//Edge symbol: 'Answer_6_c_1'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseover",function(sym,e){EC.Sound.play("hover");sym.stop("Over");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mousedown",function(sym,e){sym.stop("Down");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseup",function(sym,e){sym.stop("Over");EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseout",function(sym,e){sym.stop("Up");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchend",function(sym,e){EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchstart",function(sym,e){sym.stop("Down");});
//Edge binding end
})("_Question_07_Answer_C");
//Edge symbol end:'_Question_07_Answer_C'

//=========================================================

//Edge symbol: 'Answer_6_d_1'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseover",function(sym,e){EC.Sound.play("hover");sym.stop("Over");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mousedown",function(sym,e){sym.stop("Down");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseup",function(sym,e){sym.stop("Over");EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseout",function(sym,e){sym.stop("Up");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchend",function(sym,e){EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchstart",function(sym,e){sym.stop("Down");});
//Edge binding end
})("_Question_07_Answer_D");
//Edge symbol end:'_Question_07_Answer_D'

//=========================================================

//Edge symbol: 'Answer_7_a_1'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseover",function(sym,e){EC.Sound.play("hover");sym.stop("Over");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mousedown",function(sym,e){sym.stop("Down");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseup",function(sym,e){sym.stop("Over");EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseout",function(sym,e){sym.stop("Up");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchend",function(sym,e){EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchstart",function(sym,e){sym.stop("Down");});
//Edge binding end
})("_Question_08_Answer_A");
//Edge symbol end:'_Question_08_Answer_A'

//=========================================================

//Edge symbol: 'Answer_7_b_1'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseover",function(sym,e){EC.Sound.play("hover");sym.stop("Over");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mousedown",function(sym,e){sym.stop("Down");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseup",function(sym,e){sym.stop("Over");EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseout",function(sym,e){sym.stop("Up");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchend",function(sym,e){EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchstart",function(sym,e){sym.stop("Down");});
//Edge binding end
})("_Question_08_Answer_B");
//Edge symbol end:'_Question_08_Answer_B'

//=========================================================

//Edge symbol: 'Answer_7_c_1'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseover",function(sym,e){EC.Sound.play("hover");sym.stop("Over");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mousedown",function(sym,e){sym.stop("Down");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseup",function(sym,e){sym.stop("Over");EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseout",function(sym,e){sym.stop("Up");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchend",function(sym,e){EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchstart",function(sym,e){sym.stop("Down");});
//Edge binding end
})("_Question_08_Answer_C");
//Edge symbol end:'_Question_08_Answer_C'

//=========================================================

//Edge symbol: 'Answer_7_d_1'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseover",function(sym,e){EC.Sound.play("hover");sym.stop("Over");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mousedown",function(sym,e){sym.stop("Down");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseup",function(sym,e){sym.stop("Over");EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseout",function(sym,e){sym.stop("Up");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchend",function(sym,e){EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchstart",function(sym,e){sym.stop("Down");});
//Edge binding end
})("_Question_08_Answer_D");
//Edge symbol end:'_Question_08_Answer_D'

//=========================================================

//Edge symbol: 'Answer_8_a_1'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseover",function(sym,e){EC.Sound.play("hover");sym.stop("Over");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mousedown",function(sym,e){sym.stop("Down");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseup",function(sym,e){sym.stop("Over");EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseout",function(sym,e){sym.stop("Up");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchend",function(sym,e){EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchstart",function(sym,e){sym.stop("Down");});
//Edge binding end
})("_Question_09_Answer_A");
//Edge symbol end:'_Question_09_Answer_A'

//=========================================================

//Edge symbol: 'Answer_8_b_1'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseover",function(sym,e){EC.Sound.play("hover");sym.stop("Over");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mousedown",function(sym,e){sym.stop("Down");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseup",function(sym,e){sym.stop("Over");EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseout",function(sym,e){sym.stop("Up");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchend",function(sym,e){EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchstart",function(sym,e){sym.stop("Down");});
//Edge binding end
})("_Question_09_Answer_B");
//Edge symbol end:'_Question_09_Answer_B'

//=========================================================

//Edge symbol: 'Answer_8_c_1'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseover",function(sym,e){EC.Sound.play("hover");sym.stop("Over");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mousedown",function(sym,e){sym.stop("Down");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseup",function(sym,e){sym.stop("Over");EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseout",function(sym,e){sym.stop("Up");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchend",function(sym,e){EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchstart",function(sym,e){sym.stop("Down");});
//Edge binding end
})("_Question_09_Answer_C");
//Edge symbol end:'_Question_09_Answer_C'

//=========================================================

//Edge symbol: 'Answer_8_d_1'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseover",function(sym,e){EC.Sound.play("hover");sym.stop("Over");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mousedown",function(sym,e){sym.stop("Down");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseup",function(sym,e){sym.stop("Over");EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseout",function(sym,e){sym.stop("Up");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchend",function(sym,e){EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchstart",function(sym,e){sym.stop("Down");});
//Edge binding end
})("_Question_09_Answer_D");
//Edge symbol end:'_Question_09_Answer_D'

//=========================================================

//Edge symbol: 'Answer_9_a_1'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseover",function(sym,e){EC.Sound.play("hover");sym.stop("Over");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mousedown",function(sym,e){sym.stop("Down");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseup",function(sym,e){sym.stop("Over");EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseout",function(sym,e){sym.stop("Up");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchend",function(sym,e){EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchstart",function(sym,e){sym.stop("Down");});
//Edge binding end
})("_Question_10_Answer_A");
//Edge symbol end:'_Question_10_Answer_A'

//=========================================================

//Edge symbol: 'Answer_9_b_1'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseover",function(sym,e){EC.Sound.play("hover");sym.stop("Over");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mousedown",function(sym,e){sym.stop("Down");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseup",function(sym,e){sym.stop("Over");EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseout",function(sym,e){sym.stop("Up");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchend",function(sym,e){EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchstart",function(sym,e){sym.stop("Down");});
//Edge binding end
})("_Question_10_Answer_B");
//Edge symbol end:'_Question_10_Answer_B'

//=========================================================

//Edge symbol: 'Answer_9_c_1'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseover",function(sym,e){EC.Sound.play("hover");sym.stop("Over");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mousedown",function(sym,e){sym.stop("Down");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseup",function(sym,e){sym.stop("Over");EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseout",function(sym,e){sym.stop("Up");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchend",function(sym,e){EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchstart",function(sym,e){sym.stop("Down");});
//Edge binding end
})("_Question_10_Answer_C");
//Edge symbol end:'_Question_10_Answer_C'

//=========================================================

//Edge symbol: 'Answer_9_d_1'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseover",function(sym,e){EC.Sound.play("hover");sym.stop("Over");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mousedown",function(sym,e){sym.stop("Down");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseup",function(sym,e){sym.stop("Over");EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseout",function(sym,e){sym.stop("Up");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchend",function(sym,e){EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchstart",function(sym,e){sym.stop("Down");});
//Edge binding end
})("_Question_10_Answer_D");
//Edge symbol end:'_Question_10_Answer_D'

//=========================================================

//Edge symbol: 'Answer_10_a_1'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseover",function(sym,e){EC.Sound.play("hover");sym.stop("Over");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mousedown",function(sym,e){sym.stop("Down");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseup",function(sym,e){sym.stop("Over");EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseout",function(sym,e){sym.stop("Up");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchend",function(sym,e){EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchstart",function(sym,e){sym.stop("Down");});
//Edge binding end
})("_Question_11_Answer_A");
//Edge symbol end:'_Question_11_Answer_A'

//=========================================================

//Edge symbol: 'Answer_10_b_1'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseover",function(sym,e){EC.Sound.play("hover");sym.stop("Over");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mousedown",function(sym,e){sym.stop("Down");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseup",function(sym,e){sym.stop("Over");EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseout",function(sym,e){sym.stop("Up");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchend",function(sym,e){EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchstart",function(sym,e){sym.stop("Down");});
//Edge binding end
})("_Question_11_Answer_B");
//Edge symbol end:'_Question_11_Answer_B'

//=========================================================

//Edge symbol: 'Answer_10_c_1'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseover",function(sym,e){EC.Sound.play("hover");sym.stop("Over");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mousedown",function(sym,e){sym.stop("Down");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseup",function(sym,e){sym.stop("Over");EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseout",function(sym,e){sym.stop("Up");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchend",function(sym,e){EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchstart",function(sym,e){sym.stop("Down");});
//Edge binding end
})("_Question_11_Answer_C");
//Edge symbol end:'_Question_11_Answer_C'

//=========================================================

//Edge symbol: 'Answer_10_d_1'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseover",function(sym,e){EC.Sound.play("hover");sym.stop("Over");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mousedown",function(sym,e){sym.stop("Down");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseup",function(sym,e){sym.stop("Over");EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseout",function(sym,e){sym.stop("Up");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchend",function(sym,e){EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchstart",function(sym,e){sym.stop("Down");});
//Edge binding end
})("_Question_11_Answer_D");
//Edge symbol end:'_Question_11_Answer_D'

//=========================================================

//Edge symbol: 'Answer_11_a_1'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseover",function(sym,e){EC.Sound.play("hover");sym.stop("Over");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mousedown",function(sym,e){sym.stop("Down");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseup",function(sym,e){sym.stop("Over");EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseout",function(sym,e){sym.stop("Up");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchend",function(sym,e){EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchstart",function(sym,e){sym.stop("Down");});
//Edge binding end
})("_Question_12_Answer_A");
//Edge symbol end:'_Question_12_Answer_A'

//=========================================================

//Edge symbol: 'Answer_11_b_1'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseover",function(sym,e){EC.Sound.play("hover");sym.stop("Over");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mousedown",function(sym,e){sym.stop("Down");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseup",function(sym,e){sym.stop("Over");EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseout",function(sym,e){sym.stop("Up");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchend",function(sym,e){EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchstart",function(sym,e){sym.stop("Down");});
//Edge binding end
})("_Question_12_Answer_B");
//Edge symbol end:'_Question_12_Answer_B'

//=========================================================

//Edge symbol: 'Answer_11_c_1'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseover",function(sym,e){EC.Sound.play("hover");sym.stop("Over");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mousedown",function(sym,e){sym.stop("Down");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseup",function(sym,e){sym.stop("Over");EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseout",function(sym,e){sym.stop("Up");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchend",function(sym,e){EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchstart",function(sym,e){sym.stop("Down");});
//Edge binding end
})("_Question_12_Answer_C");
//Edge symbol end:'_Question_12_Answer_C'

//=========================================================

//Edge symbol: 'Answer_11_d_1'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseover",function(sym,e){EC.Sound.play("hover");sym.stop("Over");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mousedown",function(sym,e){sym.stop("Down");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseup",function(sym,e){sym.stop("Over");EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseout",function(sym,e){sym.stop("Up");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchend",function(sym,e){EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchstart",function(sym,e){sym.stop("Down");});
//Edge binding end
})("_Question_12_Answer_D");
//Edge symbol end:'_Question_12_Answer_D'

//=========================================================

//Edge symbol: 'Answer_12_a_1'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseover",function(sym,e){EC.Sound.play("hover");sym.stop("Over");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mousedown",function(sym,e){sym.stop("Down");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseup",function(sym,e){sym.stop("Over");EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseout",function(sym,e){sym.stop("Up");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchend",function(sym,e){EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchstart",function(sym,e){sym.stop("Down");});
//Edge binding end
})("_Question_13_Answer_A");
//Edge symbol end:'_Question_13_Answer_A'

//=========================================================

//Edge symbol: 'Answer_12_b_1'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseover",function(sym,e){EC.Sound.play("hover");sym.stop("Over");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mousedown",function(sym,e){sym.stop("Down");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseup",function(sym,e){sym.stop("Over");EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseout",function(sym,e){sym.stop("Up");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchend",function(sym,e){EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchstart",function(sym,e){sym.stop("Down");});
//Edge binding end
})("_Question_13_Answer_B");
//Edge symbol end:'_Question_13_Answer_B'

//=========================================================

//Edge symbol: 'Answer_12_c_1'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseover",function(sym,e){EC.Sound.play("hover");sym.stop("Over");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mousedown",function(sym,e){sym.stop("Down");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseup",function(sym,e){sym.stop("Over");EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseout",function(sym,e){sym.stop("Up");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchend",function(sym,e){EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchstart",function(sym,e){sym.stop("Down");});
//Edge binding end
})("_Question_13_Answer_C");
//Edge symbol end:'_Question_13_Answer_C'

//=========================================================

//Edge symbol: 'Answer_12_d_1'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseover",function(sym,e){EC.Sound.play("hover");sym.stop("Over");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mousedown",function(sym,e){sym.stop("Down");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseup",function(sym,e){sym.stop("Over");EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseout",function(sym,e){sym.stop("Up");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchend",function(sym,e){EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchstart",function(sym,e){sym.stop("Down");});
//Edge binding end
})("_Question_13_Answer_D");
//Edge symbol end:'_Question_13_Answer_D'

//=========================================================

//Edge symbol: 'Answer_13_a_1'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseover",function(sym,e){EC.Sound.play("hover");sym.stop("Over");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mousedown",function(sym,e){sym.stop("Down");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseup",function(sym,e){sym.stop("Over");EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseout",function(sym,e){sym.stop("Up");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchend",function(sym,e){EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchstart",function(sym,e){sym.stop("Down");});
//Edge binding end
})("_Question_14_Answer_A");
//Edge symbol end:'_Question_14_Answer_A'

//=========================================================

//Edge symbol: 'Answer_13_b_1'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseover",function(sym,e){EC.Sound.play("hover");sym.stop("Over");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mousedown",function(sym,e){sym.stop("Down");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseup",function(sym,e){sym.stop("Over");EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseout",function(sym,e){sym.stop("Up");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchend",function(sym,e){EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchstart",function(sym,e){sym.stop("Down");});
//Edge binding end
})("_Question_14_Answer_B");
//Edge symbol end:'_Question_14_Answer_B'

//=========================================================

//Edge symbol: 'Answer_13_c_1'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseover",function(sym,e){EC.Sound.play("hover");sym.stop("Over");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mousedown",function(sym,e){sym.stop("Down");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseup",function(sym,e){sym.stop("Over");EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseout",function(sym,e){sym.stop("Up");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchend",function(sym,e){EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchstart",function(sym,e){sym.stop("Down");});
//Edge binding end
})("_Question_14_Answer_C");
//Edge symbol end:'_Question_14_Answer_C'

//=========================================================

//Edge symbol: 'Answer_13_d_1'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseover",function(sym,e){EC.Sound.play("hover");sym.stop("Over");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mousedown",function(sym,e){sym.stop("Down");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseup",function(sym,e){sym.stop("Over");EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseout",function(sym,e){sym.stop("Up");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchend",function(sym,e){EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchstart",function(sym,e){sym.stop("Down");});
//Edge binding end
})("_Question_14_Answer_D");
//Edge symbol end:'_Question_14_Answer_D'

//=========================================================

//Edge symbol: 'Answer_14_a_1'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseover",function(sym,e){EC.Sound.play("hover");sym.stop("Over");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mousedown",function(sym,e){sym.stop("Down");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseup",function(sym,e){sym.stop("Over");EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseout",function(sym,e){sym.stop("Up");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchend",function(sym,e){EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchstart",function(sym,e){sym.stop("Down");});
//Edge binding end
})("_Question_15_Answer_A");
//Edge symbol end:'_Question_15_Answer_A'

//=========================================================

//Edge symbol: 'Answer_14_b_1'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseover",function(sym,e){EC.Sound.play("hover");sym.stop("Over");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mousedown",function(sym,e){sym.stop("Down");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseup",function(sym,e){sym.stop("Over");EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseout",function(sym,e){sym.stop("Up");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchend",function(sym,e){EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchstart",function(sym,e){sym.stop("Down");});
//Edge binding end
})("_Question_15_Answer_B");
//Edge symbol end:'_Question_15_Answer_B'

//=========================================================

//Edge symbol: 'Answer_14_c_1'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseover",function(sym,e){EC.Sound.play("hover");sym.stop("Over");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mousedown",function(sym,e){sym.stop("Down");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseup",function(sym,e){sym.stop("Over");EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseout",function(sym,e){sym.stop("Up");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchend",function(sym,e){EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchstart",function(sym,e){sym.stop("Down");});
//Edge binding end
})("_Question_15_Answer_C");
//Edge symbol end:'_Question_15_Answer_C'

//=========================================================

//Edge symbol: 'Answer_14_d_1'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseover",function(sym,e){EC.Sound.play("hover");sym.stop("Over");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mousedown",function(sym,e){sym.stop("Down");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseup",function(sym,e){sym.stop("Over");EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseout",function(sym,e){sym.stop("Up");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchend",function(sym,e){EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchstart",function(sym,e){sym.stop("Down");});
//Edge binding end
})("_Question_15_Answer_D");
//Edge symbol end:'_Question_15_Answer_D'

//=========================================================

//Edge symbol: 'Continue_Button_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",500,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1000,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_play_again_trigger}","mouseover",function(sym,e){sym.play("Hover");EC.Sound.play("hover");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_play_again_trigger}","mouseup",function(sym,e){sym.play("Hover");EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_play_again_trigger}","mouseout",function(sym,e){sym.play("Normal");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_play_again_trigger}","mousedown",function(sym,e){sym.play("Hover");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_play_again_trigger}","touchstart",function(sym,e){sym.stop("Down");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_play_again_trigger}","touchend",function(sym,e){EC.Sound.play("click");sym.stop("Normal");});
//Edge binding end
})("_Play_Again_Button");
//Edge symbol end:'_Play_Again_Button'

//=========================================================

//Edge symbol: 'Question_2_Content'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Answer_A}","mouseup",function(sym,e){var answer_A_Correct=sym.getVariable("answer_A_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_a")!=undefined)
{var selected_a=sym.getVariable("selected_a");}
else
{var selected_a=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_a==false)
{selected_a=true;sym.getSymbol("Answer_A").stop("Down");}
else if(selected_a==true)
{selected_a=false;}
sym.setVariable("selected_a",selected_a);sym.getSymbol("Answer_A").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_A").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_a")==true)
{sym.getSymbol("Answer_A").stop("Down");}
else
{sym.getSymbol("Answer_A").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_A_Correct==true)
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_A}","touchend",function(sym,e){var answer_A_Correct=sym.getVariable("answer_A_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_a")!=undefined)
{var selected_a=sym.getVariable("selected_a");}
else
{var selected_a=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_a==false)
{selected_a=true;sym.getSymbol("Answer_A").stop("Down");}
else if(selected_a==true)
{selected_a=false;}
sym.setVariable("selected_a",selected_a);sym.getSymbol("Answer_A").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_A").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_a")==true)
{sym.getSymbol("Answer_A").stop("Down");}
else
{sym.getSymbol("Answer_A").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_A_Correct==true)
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_B}","mouseup",function(sym,e){var answer_B_Correct=sym.getVariable("answer_B_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_b")!=undefined)
{var selected_b=sym.getVariable("selected_b");}
else
{var selected_b=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_b==false)
{selected_b=true;sym.getSymbol("Answer_B").stop("Down");}
else if(selected_b==true)
{selected_b=false;}
sym.setVariable("selected_b",selected_b);sym.getSymbol("Answer_B").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_B").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_b")==true)
{sym.getSymbol("Answer_B").stop("Down");}
else
{sym.getSymbol("Answer_B").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_B_Correct==true)
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_B}","touchend",function(sym,e){var answer_B_Correct=sym.getVariable("answer_B_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_b")!=undefined)
{var selected_b=sym.getVariable("selected_b");}
else
{var selected_b=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_b==false)
{selected_b=true;sym.getSymbol("Answer_B").stop("Down");}
else if(selected_b==true)
{selected_b=false;}
sym.setVariable("selected_b",selected_b);sym.getSymbol("Answer_B").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_B").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_b")==true)
{sym.getSymbol("Answer_B").stop("Down");}
else
{sym.getSymbol("Answer_B").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_B_Correct==true)
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_C}","mouseup",function(sym,e){var answer_C_Correct=sym.getVariable("answer_C_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_c")!=undefined)
{var selected_c=sym.getVariable("selected_c");}
else
{var selected_c=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_c==false)
{selected_c=true;sym.getSymbol("Answer_C").stop("Down");}
else if(selected_c==true)
{selected_c=false;}
sym.setVariable("selected_c",selected_c);sym.getSymbol("Answer_C").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_C").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_c")==true)
{sym.getSymbol("Answer_C").stop("Down");}
else
{sym.getSymbol("Answer_C").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_C_Correct==true){EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_C}","touchend",function(sym,e){var answer_C_Correct=sym.getVariable("answer_C_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_c")!=undefined)
{var selected_c=sym.getVariable("selected_c");}
else
{var selected_c=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_c==false)
{selected_c=true;sym.getSymbol("Answer_C").stop("Down");}
else if(selected_c==true)
{selected_c=false;}
sym.setVariable("selected_c",selected_c);sym.getSymbol("Answer_C").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_C").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_c")==true)
{sym.getSymbol("Answer_C").stop("Down");}
else
{sym.getSymbol("Answer_C").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_C_Correct==true){EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_D}","mouseup",function(sym,e){var answer_D_Correct=sym.getVariable("answer_D_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_d")!=undefined)
{var selected_d=sym.getVariable("selected_d");}
else
{var selected_d=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_d==false)
{selected_d=true;sym.getSymbol("Answer_D").stop("Down");}
else if(selected_d==true)
{selected_d=false;}
sym.setVariable("selected_d",selected_d);sym.getSymbol("Answer_D").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_D").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_d")==true)
{sym.getSymbol("Answer_D").stop("Down");}
else
{sym.getSymbol("Answer_D").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_D_Correct==true)
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");;}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_D}","touchend",function(sym,e){var answer_D_Correct=sym.getVariable("answer_D_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_d")!=undefined)
{var selected_d=sym.getVariable("selected_d");}
else
{var selected_d=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_d==false)
{selected_d=true;sym.getSymbol("Answer_D").stop("Down");}
else if(selected_d==true)
{selected_d=false;}
sym.setVariable("selected_d",selected_d);sym.getSymbol("Answer_D").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_D").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_d")==true)
{sym.getSymbol("Answer_D").stop("Down");}
else
{sym.getSymbol("Answer_D").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_D_Correct==true)
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");;}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Continue_BTN}","mouseup",function(sym,e){var questionCtr=sym.getParentSymbol().getVariable("questionCtr");sym.getParentSymbol().stop("Game_Board");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Card").stop("Disabled");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Card").$("cursor").hide();sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Card").$("Card_Trigger").hide();sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Dice").stop("Up");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Dice").$("Cursor").show();sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Dice").$("Dice_Trigger").show();EC.Sound.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Continue_BTN}","touchend",function(sym,e){var questionCtr=sym.getParentSymbol().getVariable("questionCtr");sym.getParentSymbol().stop("Game_Board");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Card").stop("Disabled");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Card").$("cursor").hide();sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Card").$("Card_Trigger").hide();sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Dice").stop("Up");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Dice").$("Cursor").show();sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Dice").$("Dice_Trigger").show();EC.Sound.stop();});
//Edge binding end
Symbol.bindSymbolAction(compId,symbolName,"creationComplete",function(sym,e){sym.setVariable("multipleAnswers",false);sym.setVariable("answer_A_Correct",false);sym.setVariable("answer_B_Correct",false);sym.setVariable("answer_C_Correct",true);sym.setVariable("answer_D_Correct",false);sym.setVariable("numOfDistractors",4);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){var numOfDistractors=sym.getVariable("numOfDistractors");sym.setVariable("selected_a",false);sym.setVariable("selected_b",false);sym.setVariable("selected_c",false);sym.setVariable("selected_d",false);if(numOfDistractors==1)
{sym.$("Answer_B").hide();sym.$("Answer_C").hide();sym.$("Answer_D").hide();}
else if(numOfDistractors==2)
{sym.$("Answer_C").hide();sym.$("Answer_D").hide();}
else if(numOfDistractors==3)
{sym.$("Answer_D").hide();}
if(sym.getVariable("multipleAnswers")==true)
{sym.$("_Submit_Button").show();}
else
{sym.$("_Submit_Button").hide();}
sym.getSymbol("Answer_A").stop("Up");sym.getSymbol("Answer_B").stop("Up");sym.getSymbol("Answer_C").stop("Up");sym.getSymbol("Answer_D").stop("Up");sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${__Submit_Button}","mouseup",function(sym,e){var selected_a=sym.getVariable("selected_a");var selected_b=sym.getVariable("selected_b");var selected_c=sym.getVariable("selected_c");var selected_d=sym.getVariable("selected_d");var answer_A_Correct=sym.getVariable("answer_A_Correct");var answer_B_Correct=sym.getVariable("answer_B_Correct");var answer_C_Correct=sym.getVariable("answer_C_Correct");var answer_D_Correct=sym.getVariable("answer_D_Correct");if((selected_a==answer_A_Correct)&&(selected_b==answer_B_Correct)&&(selected_c==answer_C_Correct)&&(selected_d==answer_D_Correct))
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}
sym.$("_Submit_Button").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${__Submit_Button}","touchend",function(sym,e){var selected_a=sym.getVariable("selected_a");var selected_b=sym.getVariable("selected_b");var selected_c=sym.getVariable("selected_c");var selected_d=sym.getVariable("selected_d");var answer_A_Correct=sym.getVariable("answer_A_Correct");var answer_B_Correct=sym.getVariable("answer_B_Correct");var answer_C_Correct=sym.getVariable("answer_C_Correct");var answer_D_Correct=sym.getVariable("answer_D_Correct");if((selected_a==answer_A_Correct)&&(selected_b==answer_B_Correct)&&(selected_c==answer_C_Correct)&&(selected_d==answer_D_Correct))
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}
sym.$("_Submit_Button").hide();});
//Edge binding end
})("Question_02_Choices");
//Edge symbol end:'Question_02_Choices'

//=========================================================

//Edge symbol: 'Question_3_Content'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Answer_A}","mouseup",function(sym,e){var answer_A_Correct=sym.getVariable("answer_A_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_a")!=undefined)
{var selected_a=sym.getVariable("selected_a");}
else
{var selected_a=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_a==false)
{selected_a=true;sym.getSymbol("Answer_A").stop("Down");}
else if(selected_a==true)
{selected_a=false;}
sym.setVariable("selected_a",selected_a);sym.getSymbol("Answer_A").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_A").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_a")==true)
{sym.getSymbol("Answer_A").stop("Down");}
else
{sym.getSymbol("Answer_A").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_A_Correct==true)
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_A}","touchend",function(sym,e){var answer_A_Correct=sym.getVariable("answer_A_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_a")!=undefined)
{var selected_a=sym.getVariable("selected_a");}
else
{var selected_a=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_a==false)
{selected_a=true;sym.getSymbol("Answer_A").stop("Down");}
else if(selected_a==true)
{selected_a=false;}
sym.setVariable("selected_a",selected_a);sym.getSymbol("Answer_A").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_A").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_a")==true)
{sym.getSymbol("Answer_A").stop("Down");}
else
{sym.getSymbol("Answer_A").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_A_Correct==true)
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_B}","mouseup",function(sym,e){var answer_B_Correct=sym.getVariable("answer_B_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_b")!=undefined)
{var selected_b=sym.getVariable("selected_b");}
else
{var selected_b=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_b==false)
{selected_b=true;sym.getSymbol("Answer_B").stop("Down");}
else if(selected_b==true)
{selected_b=false;}
sym.setVariable("selected_b",selected_b);sym.getSymbol("Answer_B").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_B").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_b")==true)
{sym.getSymbol("Answer_B").stop("Down");}
else
{sym.getSymbol("Answer_B").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_B_Correct==true)
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_B}","touchend",function(sym,e){var answer_B_Correct=sym.getVariable("answer_B_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_b")!=undefined)
{var selected_b=sym.getVariable("selected_b");}
else
{var selected_b=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_b==false)
{selected_b=true;sym.getSymbol("Answer_B").stop("Down");}
else if(selected_b==true)
{selected_b=false;}
sym.setVariable("selected_b",selected_b);sym.getSymbol("Answer_B").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_B").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_b")==true)
{sym.getSymbol("Answer_B").stop("Down");}
else
{sym.getSymbol("Answer_B").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_B_Correct==true)
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_C}","mouseup",function(sym,e){var answer_C_Correct=sym.getVariable("answer_C_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_c")!=undefined)
{var selected_c=sym.getVariable("selected_c");}
else
{var selected_c=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_c==false)
{selected_c=true;sym.getSymbol("Answer_C").stop("Down");}
else if(selected_c==true)
{selected_c=false;}
sym.setVariable("selected_c",selected_c);sym.getSymbol("Answer_C").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_C").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_c")==true)
{sym.getSymbol("Answer_C").stop("Down");}
else
{sym.getSymbol("Answer_C").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_C_Correct==true){EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_C}","touchend",function(sym,e){var answer_C_Correct=sym.getVariable("answer_C_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_c")!=undefined)
{var selected_c=sym.getVariable("selected_c");}
else
{var selected_c=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_c==false)
{selected_c=true;sym.getSymbol("Answer_C").stop("Down");}
else if(selected_c==true)
{selected_c=false;}
sym.setVariable("selected_c",selected_c);sym.getSymbol("Answer_C").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_C").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_c")==true)
{sym.getSymbol("Answer_C").stop("Down");}
else
{sym.getSymbol("Answer_C").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_C_Correct==true){EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_D}","mouseup",function(sym,e){var answer_D_Correct=sym.getVariable("answer_D_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_d")!=undefined)
{var selected_d=sym.getVariable("selected_d");}
else
{var selected_d=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_d==false)
{selected_d=true;sym.getSymbol("Answer_D").stop("Down");}
else if(selected_d==true)
{selected_d=false;}
sym.setVariable("selected_d",selected_d);sym.getSymbol("Answer_D").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_D").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_d")==true)
{sym.getSymbol("Answer_D").stop("Down");}
else
{sym.getSymbol("Answer_D").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_D_Correct==true)
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");;}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_D}","touchend",function(sym,e){var answer_D_Correct=sym.getVariable("answer_D_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_d")!=undefined)
{var selected_d=sym.getVariable("selected_d");}
else
{var selected_d=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_d==false)
{selected_d=true;sym.getSymbol("Answer_D").stop("Down");}
else if(selected_d==true)
{selected_d=false;}
sym.setVariable("selected_d",selected_d);sym.getSymbol("Answer_D").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_D").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_d")==true)
{sym.getSymbol("Answer_D").stop("Down");}
else
{sym.getSymbol("Answer_D").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_D_Correct==true)
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");;}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Continue_BTN}","mouseup",function(sym,e){var questionCtr=sym.getParentSymbol().getVariable("questionCtr");sym.getParentSymbol().stop("Game_Board");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Card").stop("Disabled");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Card").$("cursor").hide();sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Card").$("Card_Trigger").hide();sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Dice").stop("Up");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Dice").$("Cursor").show();sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Dice").$("Dice_Trigger").show();EC.Sound.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Continue_BTN}","touchend",function(sym,e){var questionCtr=sym.getParentSymbol().getVariable("questionCtr");sym.getParentSymbol().stop("Game_Board");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Card").stop("Disabled");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Card").$("cursor").hide();sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Card").$("Card_Trigger").hide();sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Dice").stop("Up");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Dice").$("Cursor").show();sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Dice").$("Dice_Trigger").show();EC.Sound.stop();});
//Edge binding end
Symbol.bindSymbolAction(compId,symbolName,"creationComplete",function(sym,e){sym.setVariable("multipleAnswers",false);sym.setVariable("answer_A_Correct",false);sym.setVariable("answer_B_Correct",false);sym.setVariable("answer_C_Correct",false);sym.setVariable("answer_D_Correct",true);sym.setVariable("numOfDistractors",4);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){var numOfDistractors=sym.getVariable("numOfDistractors");sym.setVariable("selected_a",false);sym.setVariable("selected_b",false);sym.setVariable("selected_c",false);sym.setVariable("selected_d",false);if(numOfDistractors==1)
{sym.$("Answer_B").hide();sym.$("Answer_C").hide();sym.$("Answer_D").hide();}
else if(numOfDistractors==2)
{sym.$("Answer_C").hide();sym.$("Answer_D").hide();}
else if(numOfDistractors==3)
{sym.$("Answer_D").hide();}
if(sym.getVariable("multipleAnswers")==true)
{sym.$("_Submit_Button").show();}
else
{sym.$("_Submit_Button").hide();}
sym.getSymbol("Answer_A").stop("Up");sym.getSymbol("Answer_B").stop("Up");sym.getSymbol("Answer_C").stop("Up");sym.getSymbol("Answer_D").stop("Up");sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${__Submit_Button}","mouseup",function(sym,e){var selected_a=sym.getVariable("selected_a");var selected_b=sym.getVariable("selected_b");var selected_c=sym.getVariable("selected_c");var selected_d=sym.getVariable("selected_d");var answer_A_Correct=sym.getVariable("answer_A_Correct");var answer_B_Correct=sym.getVariable("answer_B_Correct");var answer_C_Correct=sym.getVariable("answer_C_Correct");var answer_D_Correct=sym.getVariable("answer_D_Correct");if((selected_a==answer_A_Correct)&&(selected_b==answer_B_Correct)&&(selected_c==answer_C_Correct)&&(selected_d==answer_D_Correct))
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}
sym.$("_Submit_Button").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${__Submit_Button}","touchend",function(sym,e){var selected_a=sym.getVariable("selected_a");var selected_b=sym.getVariable("selected_b");var selected_c=sym.getVariable("selected_c");var selected_d=sym.getVariable("selected_d");var answer_A_Correct=sym.getVariable("answer_A_Correct");var answer_B_Correct=sym.getVariable("answer_B_Correct");var answer_C_Correct=sym.getVariable("answer_C_Correct");var answer_D_Correct=sym.getVariable("answer_D_Correct");if((selected_a==answer_A_Correct)&&(selected_b==answer_B_Correct)&&(selected_c==answer_C_Correct)&&(selected_d==answer_D_Correct))
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}
sym.$("_Submit_Button").hide();});
//Edge binding end
})("Question_03_Choices");
//Edge symbol end:'Question_03_Choices'

//=========================================================

//Edge symbol: 'Question_4_Content'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Answer_A}","mouseup",function(sym,e){var answer_A_Correct=sym.getVariable("answer_A_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_a")!=undefined)
{var selected_a=sym.getVariable("selected_a");}
else
{var selected_a=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_a==false)
{selected_a=true;sym.getSymbol("Answer_A").stop("Down");}
else if(selected_a==true)
{selected_a=false;}
sym.setVariable("selected_a",selected_a);sym.getSymbol("Answer_A").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_A").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_a")==true)
{sym.getSymbol("Answer_A").stop("Down");}
else
{sym.getSymbol("Answer_A").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_A_Correct==true)
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_A}","touchend",function(sym,e){var answer_A_Correct=sym.getVariable("answer_A_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_a")!=undefined)
{var selected_a=sym.getVariable("selected_a");}
else
{var selected_a=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_a==false)
{selected_a=true;sym.getSymbol("Answer_A").stop("Down");}
else if(selected_a==true)
{selected_a=false;}
sym.setVariable("selected_a",selected_a);sym.getSymbol("Answer_A").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_A").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_a")==true)
{sym.getSymbol("Answer_A").stop("Down");}
else
{sym.getSymbol("Answer_A").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_A_Correct==true)
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_B}","mouseup",function(sym,e){var answer_B_Correct=sym.getVariable("answer_B_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_b")!=undefined)
{var selected_b=sym.getVariable("selected_b");}
else
{var selected_b=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_b==false)
{selected_b=true;sym.getSymbol("Answer_B").stop("Down");}
else if(selected_b==true)
{selected_b=false;}
sym.setVariable("selected_b",selected_b);sym.getSymbol("Answer_B").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_B").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_b")==true)
{sym.getSymbol("Answer_B").stop("Down");}
else
{sym.getSymbol("Answer_B").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_B_Correct==true)
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_B}","touchend",function(sym,e){var answer_B_Correct=sym.getVariable("answer_B_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_b")!=undefined)
{var selected_b=sym.getVariable("selected_b");}
else
{var selected_b=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_b==false)
{selected_b=true;sym.getSymbol("Answer_B").stop("Down");}
else if(selected_b==true)
{selected_b=false;}
sym.setVariable("selected_b",selected_b);sym.getSymbol("Answer_B").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_B").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_b")==true)
{sym.getSymbol("Answer_B").stop("Down");}
else
{sym.getSymbol("Answer_B").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_B_Correct==true)
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_C}","mouseup",function(sym,e){var answer_C_Correct=sym.getVariable("answer_C_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_c")!=undefined)
{var selected_c=sym.getVariable("selected_c");}
else
{var selected_c=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_c==false)
{selected_c=true;sym.getSymbol("Answer_C").stop("Down");}
else if(selected_c==true)
{selected_c=false;}
sym.setVariable("selected_c",selected_c);sym.getSymbol("Answer_C").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_C").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_c")==true)
{sym.getSymbol("Answer_C").stop("Down");}
else
{sym.getSymbol("Answer_C").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_C_Correct==true){EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_C}","touchend",function(sym,e){var answer_C_Correct=sym.getVariable("answer_C_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_c")!=undefined)
{var selected_c=sym.getVariable("selected_c");}
else
{var selected_c=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_c==false)
{selected_c=true;sym.getSymbol("Answer_C").stop("Down");}
else if(selected_c==true)
{selected_c=false;}
sym.setVariable("selected_c",selected_c);sym.getSymbol("Answer_C").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_C").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_c")==true)
{sym.getSymbol("Answer_C").stop("Down");}
else
{sym.getSymbol("Answer_C").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_C_Correct==true){EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_D}","mouseup",function(sym,e){var answer_D_Correct=sym.getVariable("answer_D_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_d")!=undefined)
{var selected_d=sym.getVariable("selected_d");}
else
{var selected_d=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_d==false)
{selected_d=true;sym.getSymbol("Answer_D").stop("Down");}
else if(selected_d==true)
{selected_d=false;}
sym.setVariable("selected_d",selected_d);sym.getSymbol("Answer_D").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_D").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_d")==true)
{sym.getSymbol("Answer_D").stop("Down");}
else
{sym.getSymbol("Answer_D").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_D_Correct==true)
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");;}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_D}","touchend",function(sym,e){var answer_D_Correct=sym.getVariable("answer_D_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_d")!=undefined)
{var selected_d=sym.getVariable("selected_d");}
else
{var selected_d=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_d==false)
{selected_d=true;sym.getSymbol("Answer_D").stop("Down");}
else if(selected_d==true)
{selected_d=false;}
sym.setVariable("selected_d",selected_d);sym.getSymbol("Answer_D").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_D").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_d")==true)
{sym.getSymbol("Answer_D").stop("Down");}
else
{sym.getSymbol("Answer_D").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_D_Correct==true)
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");;}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Continue_BTN}","mouseup",function(sym,e){var questionCtr=sym.getParentSymbol().getVariable("questionCtr");sym.getParentSymbol().stop("Game_Board");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Card").stop("Disabled");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Card").$("cursor").hide();sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Card").$("Card_Trigger").hide();sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Dice").stop("Up");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Dice").$("Cursor").show();sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Dice").$("Dice_Trigger").show();EC.Sound.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Continue_BTN}","touchend",function(sym,e){var questionCtr=sym.getParentSymbol().getVariable("questionCtr");sym.getParentSymbol().stop("Game_Board");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Card").stop("Disabled");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Card").$("cursor").hide();sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Card").$("Card_Trigger").hide();sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Dice").stop("Up");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Dice").$("Cursor").show();sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Dice").$("Dice_Trigger").show();EC.Sound.stop();});
//Edge binding end
Symbol.bindSymbolAction(compId,symbolName,"creationComplete",function(sym,e){sym.setVariable("multipleAnswers",false);sym.setVariable("answer_A_Correct",true);sym.setVariable("answer_B_Correct",false);sym.setVariable("answer_C_Correct",false);sym.setVariable("answer_D_Correct",false);sym.setVariable("numOfDistractors",4);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){var numOfDistractors=sym.getVariable("numOfDistractors");sym.setVariable("selected_a",false);sym.setVariable("selected_b",false);sym.setVariable("selected_c",false);sym.setVariable("selected_d",false);if(numOfDistractors==1)
{sym.$("Answer_B").hide();sym.$("Answer_C").hide();sym.$("Answer_D").hide();}
else if(numOfDistractors==2)
{sym.$("Answer_C").hide();sym.$("Answer_D").hide();}
else if(numOfDistractors==3)
{sym.$("Answer_D").hide();}
if(sym.getVariable("multipleAnswers")==true)
{sym.$("_Submit_Button").show();}
else
{sym.$("_Submit_Button").hide();}
sym.getSymbol("Answer_A").stop("Up");sym.getSymbol("Answer_B").stop("Up");sym.getSymbol("Answer_C").stop("Up");sym.getSymbol("Answer_D").stop("Up");sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${__Submit_Button}","mouseup",function(sym,e){var selected_a=sym.getVariable("selected_a");var selected_b=sym.getVariable("selected_b");var selected_c=sym.getVariable("selected_c");var selected_d=sym.getVariable("selected_d");var answer_A_Correct=sym.getVariable("answer_A_Correct");var answer_B_Correct=sym.getVariable("answer_B_Correct");var answer_C_Correct=sym.getVariable("answer_C_Correct");var answer_D_Correct=sym.getVariable("answer_D_Correct");if((selected_a==answer_A_Correct)&&(selected_b==answer_B_Correct)&&(selected_c==answer_C_Correct)&&(selected_d==answer_D_Correct))
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}
sym.$("_Submit_Button").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${__Submit_Button}","touchend",function(sym,e){var selected_a=sym.getVariable("selected_a");var selected_b=sym.getVariable("selected_b");var selected_c=sym.getVariable("selected_c");var selected_d=sym.getVariable("selected_d");var answer_A_Correct=sym.getVariable("answer_A_Correct");var answer_B_Correct=sym.getVariable("answer_B_Correct");var answer_C_Correct=sym.getVariable("answer_C_Correct");var answer_D_Correct=sym.getVariable("answer_D_Correct");if((selected_a==answer_A_Correct)&&(selected_b==answer_B_Correct)&&(selected_c==answer_C_Correct)&&(selected_d==answer_D_Correct))
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}
sym.$("_Submit_Button").hide();});
//Edge binding end
})("Question_04_Choices");
//Edge symbol end:'Question_04_Choices'

//=========================================================

//Edge symbol: 'Question_5_Content'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Answer_A}","mouseup",function(sym,e){var answer_A_Correct=sym.getVariable("answer_A_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_a")!=undefined)
{var selected_a=sym.getVariable("selected_a");}
else
{var selected_a=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_a==false)
{selected_a=true;sym.getSymbol("Answer_A").stop("Down");}
else if(selected_a==true)
{selected_a=false;}
sym.setVariable("selected_a",selected_a);sym.getSymbol("Answer_A").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_A").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_a")==true)
{sym.getSymbol("Answer_A").stop("Down");}
else
{sym.getSymbol("Answer_A").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_A_Correct==true)
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_A}","touchend",function(sym,e){var answer_A_Correct=sym.getVariable("answer_A_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_a")!=undefined)
{var selected_a=sym.getVariable("selected_a");}
else
{var selected_a=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_a==false)
{selected_a=true;sym.getSymbol("Answer_A").stop("Down");}
else if(selected_a==true)
{selected_a=false;}
sym.setVariable("selected_a",selected_a);sym.getSymbol("Answer_A").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_A").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_a")==true)
{sym.getSymbol("Answer_A").stop("Down");}
else
{sym.getSymbol("Answer_A").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_A_Correct==true)
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_B}","mouseup",function(sym,e){var answer_B_Correct=sym.getVariable("answer_B_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_b")!=undefined)
{var selected_b=sym.getVariable("selected_b");}
else
{var selected_b=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_b==false)
{selected_b=true;sym.getSymbol("Answer_B").stop("Down");}
else if(selected_b==true)
{selected_b=false;}
sym.setVariable("selected_b",selected_b);sym.getSymbol("Answer_B").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_B").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_b")==true)
{sym.getSymbol("Answer_B").stop("Down");}
else
{sym.getSymbol("Answer_B").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_B_Correct==true)
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_B}","touchend",function(sym,e){var answer_B_Correct=sym.getVariable("answer_B_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_b")!=undefined)
{var selected_b=sym.getVariable("selected_b");}
else
{var selected_b=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_b==false)
{selected_b=true;sym.getSymbol("Answer_B").stop("Down");}
else if(selected_b==true)
{selected_b=false;}
sym.setVariable("selected_b",selected_b);sym.getSymbol("Answer_B").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_B").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_b")==true)
{sym.getSymbol("Answer_B").stop("Down");}
else
{sym.getSymbol("Answer_B").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_B_Correct==true)
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_C}","mouseup",function(sym,e){var answer_C_Correct=sym.getVariable("answer_C_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_c")!=undefined)
{var selected_c=sym.getVariable("selected_c");}
else
{var selected_c=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_c==false)
{selected_c=true;sym.getSymbol("Answer_C").stop("Down");}
else if(selected_c==true)
{selected_c=false;}
sym.setVariable("selected_c",selected_c);sym.getSymbol("Answer_C").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_C").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_c")==true)
{sym.getSymbol("Answer_C").stop("Down");}
else
{sym.getSymbol("Answer_C").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_C_Correct==true){EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_C}","touchend",function(sym,e){var answer_C_Correct=sym.getVariable("answer_C_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_c")!=undefined)
{var selected_c=sym.getVariable("selected_c");}
else
{var selected_c=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_c==false)
{selected_c=true;sym.getSymbol("Answer_C").stop("Down");}
else if(selected_c==true)
{selected_c=false;}
sym.setVariable("selected_c",selected_c);sym.getSymbol("Answer_C").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_C").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_c")==true)
{sym.getSymbol("Answer_C").stop("Down");}
else
{sym.getSymbol("Answer_C").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_C_Correct==true){EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_D}","mouseup",function(sym,e){var answer_D_Correct=sym.getVariable("answer_D_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_d")!=undefined)
{var selected_d=sym.getVariable("selected_d");}
else
{var selected_d=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_d==false)
{selected_d=true;sym.getSymbol("Answer_D").stop("Down");}
else if(selected_d==true)
{selected_d=false;}
sym.setVariable("selected_d",selected_d);sym.getSymbol("Answer_D").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_D").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_d")==true)
{sym.getSymbol("Answer_D").stop("Down");}
else
{sym.getSymbol("Answer_D").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_D_Correct==true)
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");;}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_D}","touchend",function(sym,e){var answer_D_Correct=sym.getVariable("answer_D_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_d")!=undefined)
{var selected_d=sym.getVariable("selected_d");}
else
{var selected_d=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_d==false)
{selected_d=true;sym.getSymbol("Answer_D").stop("Down");}
else if(selected_d==true)
{selected_d=false;}
sym.setVariable("selected_d",selected_d);sym.getSymbol("Answer_D").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_D").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_d")==true)
{sym.getSymbol("Answer_D").stop("Down");}
else
{sym.getSymbol("Answer_D").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_D_Correct==true)
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");;}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Continue_BTN}","mouseup",function(sym,e){var questionCtr=sym.getParentSymbol().getVariable("questionCtr");sym.getParentSymbol().stop("Game_Board");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Card").stop("Disabled");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Card").$("cursor").hide();sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Card").$("Card_Trigger").hide();sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Dice").stop("Up");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Dice").$("Cursor").show();sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Dice").$("Dice_Trigger").show();EC.Sound.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Continue_BTN}","touchend",function(sym,e){var questionCtr=sym.getParentSymbol().getVariable("questionCtr");sym.getParentSymbol().stop("Game_Board");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Card").stop("Disabled");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Card").$("cursor").hide();sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Card").$("Card_Trigger").hide();sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Dice").stop("Up");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Dice").$("Cursor").show();sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Dice").$("Dice_Trigger").show();EC.Sound.stop();});
//Edge binding end
Symbol.bindSymbolAction(compId,symbolName,"creationComplete",function(sym,e){sym.setVariable("multipleAnswers",false);sym.setVariable("answer_A_Correct",false);sym.setVariable("answer_B_Correct",true);sym.setVariable("answer_C_Correct",false);sym.setVariable("answer_D_Correct",false);sym.setVariable("numOfDistractors",4);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){var numOfDistractors=sym.getVariable("numOfDistractors");sym.setVariable("selected_a",false);sym.setVariable("selected_b",false);sym.setVariable("selected_c",false);sym.setVariable("selected_d",false);if(numOfDistractors==1)
{sym.$("Answer_B").hide();sym.$("Answer_C").hide();sym.$("Answer_D").hide();}
else if(numOfDistractors==2)
{sym.$("Answer_C").hide();sym.$("Answer_D").hide();}
else if(numOfDistractors==3)
{sym.$("Answer_D").hide();}
if(sym.getVariable("multipleAnswers")==true)
{sym.$("_Submit_Button").show();}
else
{sym.$("_Submit_Button").hide();}
sym.getSymbol("Answer_A").stop("Up");sym.getSymbol("Answer_B").stop("Up");sym.getSymbol("Answer_C").stop("Up");sym.getSymbol("Answer_D").stop("Up");sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${__Submit_Button}","mouseup",function(sym,e){var selected_a=sym.getVariable("selected_a");var selected_b=sym.getVariable("selected_b");var selected_c=sym.getVariable("selected_c");var selected_d=sym.getVariable("selected_d");var answer_A_Correct=sym.getVariable("answer_A_Correct");var answer_B_Correct=sym.getVariable("answer_B_Correct");var answer_C_Correct=sym.getVariable("answer_C_Correct");var answer_D_Correct=sym.getVariable("answer_D_Correct");if((selected_a==answer_A_Correct)&&(selected_b==answer_B_Correct)&&(selected_c==answer_C_Correct)&&(selected_d==answer_D_Correct))
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}
sym.$("_Submit_Button").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${__Submit_Button}","touchend",function(sym,e){var selected_a=sym.getVariable("selected_a");var selected_b=sym.getVariable("selected_b");var selected_c=sym.getVariable("selected_c");var selected_d=sym.getVariable("selected_d");var answer_A_Correct=sym.getVariable("answer_A_Correct");var answer_B_Correct=sym.getVariable("answer_B_Correct");var answer_C_Correct=sym.getVariable("answer_C_Correct");var answer_D_Correct=sym.getVariable("answer_D_Correct");if((selected_a==answer_A_Correct)&&(selected_b==answer_B_Correct)&&(selected_c==answer_C_Correct)&&(selected_d==answer_D_Correct))
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}
sym.$("_Submit_Button").hide();});
//Edge binding end
})("Question_05_Choices");
//Edge symbol end:'Question_05_Choices'

//=========================================================

//Edge symbol: 'Question_6_Content'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Answer_A}","mouseup",function(sym,e){var answer_A_Correct=sym.getVariable("answer_A_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_a")!=undefined)
{var selected_a=sym.getVariable("selected_a");}
else
{var selected_a=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_a==false)
{selected_a=true;sym.getSymbol("Answer_A").stop("Down");}
else if(selected_a==true)
{selected_a=false;}
sym.setVariable("selected_a",selected_a);sym.getSymbol("Answer_A").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_A").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_a")==true)
{sym.getSymbol("Answer_A").stop("Down");}
else
{sym.getSymbol("Answer_A").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_A_Correct==true)
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_A}","touchend",function(sym,e){var answer_A_Correct=sym.getVariable("answer_A_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_a")!=undefined)
{var selected_a=sym.getVariable("selected_a");}
else
{var selected_a=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_a==false)
{selected_a=true;sym.getSymbol("Answer_A").stop("Down");}
else if(selected_a==true)
{selected_a=false;}
sym.setVariable("selected_a",selected_a);sym.getSymbol("Answer_A").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_A").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_a")==true)
{sym.getSymbol("Answer_A").stop("Down");}
else
{sym.getSymbol("Answer_A").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_A_Correct==true)
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_B}","mouseup",function(sym,e){var answer_B_Correct=sym.getVariable("answer_B_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_b")!=undefined)
{var selected_b=sym.getVariable("selected_b");}
else
{var selected_b=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_b==false)
{selected_b=true;sym.getSymbol("Answer_B").stop("Down");}
else if(selected_b==true)
{selected_b=false;}
sym.setVariable("selected_b",selected_b);sym.getSymbol("Answer_B").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_B").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_b")==true)
{sym.getSymbol("Answer_B").stop("Down");}
else
{sym.getSymbol("Answer_B").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_B_Correct==true)
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_B}","touchend",function(sym,e){var answer_B_Correct=sym.getVariable("answer_B_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_b")!=undefined)
{var selected_b=sym.getVariable("selected_b");}
else
{var selected_b=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_b==false)
{selected_b=true;sym.getSymbol("Answer_B").stop("Down");}
else if(selected_b==true)
{selected_b=false;}
sym.setVariable("selected_b",selected_b);sym.getSymbol("Answer_B").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_B").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_b")==true)
{sym.getSymbol("Answer_B").stop("Down");}
else
{sym.getSymbol("Answer_B").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_B_Correct==true)
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_C}","mouseup",function(sym,e){var answer_C_Correct=sym.getVariable("answer_C_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_c")!=undefined)
{var selected_c=sym.getVariable("selected_c");}
else
{var selected_c=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_c==false)
{selected_c=true;sym.getSymbol("Answer_C").stop("Down");}
else if(selected_c==true)
{selected_c=false;}
sym.setVariable("selected_c",selected_c);sym.getSymbol("Answer_C").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_C").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_c")==true)
{sym.getSymbol("Answer_C").stop("Down");}
else
{sym.getSymbol("Answer_C").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_C_Correct==true){EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_C}","touchend",function(sym,e){var answer_C_Correct=sym.getVariable("answer_C_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_c")!=undefined)
{var selected_c=sym.getVariable("selected_c");}
else
{var selected_c=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_c==false)
{selected_c=true;sym.getSymbol("Answer_C").stop("Down");}
else if(selected_c==true)
{selected_c=false;}
sym.setVariable("selected_c",selected_c);sym.getSymbol("Answer_C").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_C").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_c")==true)
{sym.getSymbol("Answer_C").stop("Down");}
else
{sym.getSymbol("Answer_C").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_C_Correct==true){EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_D}","mouseup",function(sym,e){var answer_D_Correct=sym.getVariable("answer_D_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_d")!=undefined)
{var selected_d=sym.getVariable("selected_d");}
else
{var selected_d=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_d==false)
{selected_d=true;sym.getSymbol("Answer_D").stop("Down");}
else if(selected_d==true)
{selected_d=false;}
sym.setVariable("selected_d",selected_d);sym.getSymbol("Answer_D").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_D").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_d")==true)
{sym.getSymbol("Answer_D").stop("Down");}
else
{sym.getSymbol("Answer_D").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_D_Correct==true)
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");;}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_D}","touchend",function(sym,e){var answer_D_Correct=sym.getVariable("answer_D_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_d")!=undefined)
{var selected_d=sym.getVariable("selected_d");}
else
{var selected_d=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_d==false)
{selected_d=true;sym.getSymbol("Answer_D").stop("Down");}
else if(selected_d==true)
{selected_d=false;}
sym.setVariable("selected_d",selected_d);sym.getSymbol("Answer_D").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_D").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_d")==true)
{sym.getSymbol("Answer_D").stop("Down");}
else
{sym.getSymbol("Answer_D").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_D_Correct==true)
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");;}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Continue_BTN}","mouseup",function(sym,e){var questionCtr=sym.getParentSymbol().getVariable("questionCtr");sym.getParentSymbol().stop("Game_Board");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Card").stop("Disabled");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Card").$("cursor").hide();sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Card").$("Card_Trigger").hide();sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Dice").stop("Up");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Dice").$("Cursor").show();sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Dice").$("Dice_Trigger").show();EC.Sound.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Continue_BTN}","touchend",function(sym,e){var questionCtr=sym.getParentSymbol().getVariable("questionCtr");sym.getParentSymbol().stop("Game_Board");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Card").stop("Disabled");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Card").$("cursor").hide();sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Card").$("Card_Trigger").hide();sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Dice").stop("Up");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Dice").$("Cursor").show();sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Dice").$("Dice_Trigger").show();EC.Sound.stop();});
//Edge binding end
Symbol.bindSymbolAction(compId,symbolName,"creationComplete",function(sym,e){sym.setVariable("multipleAnswers",false);sym.setVariable("answer_A_Correct",false);sym.setVariable("answer_B_Correct",false);sym.setVariable("answer_C_Correct",true);sym.setVariable("answer_D_Correct",false);sym.setVariable("numOfDistractors",4);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){var numOfDistractors=sym.getVariable("numOfDistractors");sym.setVariable("selected_a",false);sym.setVariable("selected_b",false);sym.setVariable("selected_c",false);sym.setVariable("selected_d",false);if(numOfDistractors==1)
{sym.$("Answer_B").hide();sym.$("Answer_C").hide();sym.$("Answer_D").hide();}
else if(numOfDistractors==2)
{sym.$("Answer_C").hide();sym.$("Answer_D").hide();}
else if(numOfDistractors==3)
{sym.$("Answer_D").hide();}
if(sym.getVariable("multipleAnswers")==true)
{sym.$("_Submit_Button").show();}
else
{sym.$("_Submit_Button").hide();}
sym.getSymbol("Answer_A").stop("Up");sym.getSymbol("Answer_B").stop("Up");sym.getSymbol("Answer_C").stop("Up");sym.getSymbol("Answer_D").stop("Up");sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${__Submit_Button}","mouseup",function(sym,e){var selected_a=sym.getVariable("selected_a");var selected_b=sym.getVariable("selected_b");var selected_c=sym.getVariable("selected_c");var selected_d=sym.getVariable("selected_d");var answer_A_Correct=sym.getVariable("answer_A_Correct");var answer_B_Correct=sym.getVariable("answer_B_Correct");var answer_C_Correct=sym.getVariable("answer_C_Correct");var answer_D_Correct=sym.getVariable("answer_D_Correct");if((selected_a==answer_A_Correct)&&(selected_b==answer_B_Correct)&&(selected_c==answer_C_Correct)&&(selected_d==answer_D_Correct))
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}
sym.$("_Submit_Button").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${__Submit_Button}","touchend",function(sym,e){var selected_a=sym.getVariable("selected_a");var selected_b=sym.getVariable("selected_b");var selected_c=sym.getVariable("selected_c");var selected_d=sym.getVariable("selected_d");var answer_A_Correct=sym.getVariable("answer_A_Correct");var answer_B_Correct=sym.getVariable("answer_B_Correct");var answer_C_Correct=sym.getVariable("answer_C_Correct");var answer_D_Correct=sym.getVariable("answer_D_Correct");if((selected_a==answer_A_Correct)&&(selected_b==answer_B_Correct)&&(selected_c==answer_C_Correct)&&(selected_d==answer_D_Correct))
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}
sym.$("_Submit_Button").hide();});
//Edge binding end
})("Question_06_Choices");
//Edge symbol end:'Question_06_Choices'

//=========================================================

//Edge symbol: 'Question_7_Content'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Answer_A}","mouseup",function(sym,e){var answer_A_Correct=sym.getVariable("answer_A_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_a")!=undefined)
{var selected_a=sym.getVariable("selected_a");}
else
{var selected_a=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_a==false)
{selected_a=true;sym.getSymbol("Answer_A").stop("Down");}
else if(selected_a==true)
{selected_a=false;}
sym.setVariable("selected_a",selected_a);sym.getSymbol("Answer_A").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_A").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_a")==true)
{sym.getSymbol("Answer_A").stop("Down");}
else
{sym.getSymbol("Answer_A").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_A_Correct==true)
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_A}","touchend",function(sym,e){var answer_A_Correct=sym.getVariable("answer_A_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_a")!=undefined)
{var selected_a=sym.getVariable("selected_a");}
else
{var selected_a=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_a==false)
{selected_a=true;sym.getSymbol("Answer_A").stop("Down");}
else if(selected_a==true)
{selected_a=false;}
sym.setVariable("selected_a",selected_a);sym.getSymbol("Answer_A").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_A").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_a")==true)
{sym.getSymbol("Answer_A").stop("Down");}
else
{sym.getSymbol("Answer_A").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_A_Correct==true)
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_B}","mouseup",function(sym,e){var answer_B_Correct=sym.getVariable("answer_B_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_b")!=undefined)
{var selected_b=sym.getVariable("selected_b");}
else
{var selected_b=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_b==false)
{selected_b=true;sym.getSymbol("Answer_B").stop("Down");}
else if(selected_b==true)
{selected_b=false;}
sym.setVariable("selected_b",selected_b);sym.getSymbol("Answer_B").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_B").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_b")==true)
{sym.getSymbol("Answer_B").stop("Down");}
else
{sym.getSymbol("Answer_B").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_B_Correct==true)
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_B}","touchend",function(sym,e){var answer_B_Correct=sym.getVariable("answer_B_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_b")!=undefined)
{var selected_b=sym.getVariable("selected_b");}
else
{var selected_b=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_b==false)
{selected_b=true;sym.getSymbol("Answer_B").stop("Down");}
else if(selected_b==true)
{selected_b=false;}
sym.setVariable("selected_b",selected_b);sym.getSymbol("Answer_B").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_B").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_b")==true)
{sym.getSymbol("Answer_B").stop("Down");}
else
{sym.getSymbol("Answer_B").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_B_Correct==true)
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_C}","mouseup",function(sym,e){var answer_C_Correct=sym.getVariable("answer_C_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_c")!=undefined)
{var selected_c=sym.getVariable("selected_c");}
else
{var selected_c=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_c==false)
{selected_c=true;sym.getSymbol("Answer_C").stop("Down");}
else if(selected_c==true)
{selected_c=false;}
sym.setVariable("selected_c",selected_c);sym.getSymbol("Answer_C").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_C").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_c")==true)
{sym.getSymbol("Answer_C").stop("Down");}
else
{sym.getSymbol("Answer_C").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_C_Correct==true){EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_C}","touchend",function(sym,e){var answer_C_Correct=sym.getVariable("answer_C_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_c")!=undefined)
{var selected_c=sym.getVariable("selected_c");}
else
{var selected_c=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_c==false)
{selected_c=true;sym.getSymbol("Answer_C").stop("Down");}
else if(selected_c==true)
{selected_c=false;}
sym.setVariable("selected_c",selected_c);sym.getSymbol("Answer_C").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_C").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_c")==true)
{sym.getSymbol("Answer_C").stop("Down");}
else
{sym.getSymbol("Answer_C").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_C_Correct==true){EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_D}","mouseup",function(sym,e){var answer_D_Correct=sym.getVariable("answer_D_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_d")!=undefined)
{var selected_d=sym.getVariable("selected_d");}
else
{var selected_d=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_d==false)
{selected_d=true;sym.getSymbol("Answer_D").stop("Down");}
else if(selected_d==true)
{selected_d=false;}
sym.setVariable("selected_d",selected_d);sym.getSymbol("Answer_D").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_D").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_d")==true)
{sym.getSymbol("Answer_D").stop("Down");}
else
{sym.getSymbol("Answer_D").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_D_Correct==true)
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");;}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_D}","touchend",function(sym,e){var answer_D_Correct=sym.getVariable("answer_D_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_d")!=undefined)
{var selected_d=sym.getVariable("selected_d");}
else
{var selected_d=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_d==false)
{selected_d=true;sym.getSymbol("Answer_D").stop("Down");}
else if(selected_d==true)
{selected_d=false;}
sym.setVariable("selected_d",selected_d);sym.getSymbol("Answer_D").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_D").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_d")==true)
{sym.getSymbol("Answer_D").stop("Down");}
else
{sym.getSymbol("Answer_D").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_D_Correct==true)
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");;}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Continue_BTN}","mouseup",function(sym,e){var questionCtr=sym.getParentSymbol().getVariable("questionCtr");sym.getParentSymbol().stop("Game_Board");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Card").stop("Disabled");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Card").$("cursor").hide();sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Card").$("Card_Trigger").hide();sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Dice").stop("Up");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Dice").$("Cursor").show();sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Dice").$("Dice_Trigger").show();EC.Sound.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Continue_BTN}","touchend",function(sym,e){var questionCtr=sym.getParentSymbol().getVariable("questionCtr");sym.getParentSymbol().stop("Game_Board");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Card").stop("Disabled");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Card").$("cursor").hide();sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Card").$("Card_Trigger").hide();sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Dice").stop("Up");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Dice").$("Cursor").show();sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Dice").$("Dice_Trigger").show();EC.Sound.stop();});
//Edge binding end
Symbol.bindSymbolAction(compId,symbolName,"creationComplete",function(sym,e){sym.setVariable("multipleAnswers",false);sym.setVariable("answer_A_Correct",false);sym.setVariable("answer_B_Correct",false);sym.setVariable("answer_C_Correct",false);sym.setVariable("answer_D_Correct",true);sym.setVariable("numOfDistractors",4);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){var numOfDistractors=sym.getVariable("numOfDistractors");sym.setVariable("selected_a",false);sym.setVariable("selected_b",false);sym.setVariable("selected_c",false);sym.setVariable("selected_d",false);if(numOfDistractors==1)
{sym.$("Answer_B").hide();sym.$("Answer_C").hide();sym.$("Answer_D").hide();}
else if(numOfDistractors==2)
{sym.$("Answer_C").hide();sym.$("Answer_D").hide();}
else if(numOfDistractors==3)
{sym.$("Answer_D").hide();}
if(sym.getVariable("multipleAnswers")==true)
{sym.$("_Submit_Button").show();}
else
{sym.$("_Submit_Button").hide();}
sym.getSymbol("Answer_A").stop("Up");sym.getSymbol("Answer_B").stop("Up");sym.getSymbol("Answer_C").stop("Up");sym.getSymbol("Answer_D").stop("Up");sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${__Submit_Button}","mouseup",function(sym,e){var selected_a=sym.getVariable("selected_a");var selected_b=sym.getVariable("selected_b");var selected_c=sym.getVariable("selected_c");var selected_d=sym.getVariable("selected_d");var answer_A_Correct=sym.getVariable("answer_A_Correct");var answer_B_Correct=sym.getVariable("answer_B_Correct");var answer_C_Correct=sym.getVariable("answer_C_Correct");var answer_D_Correct=sym.getVariable("answer_D_Correct");if((selected_a==answer_A_Correct)&&(selected_b==answer_B_Correct)&&(selected_c==answer_C_Correct)&&(selected_d==answer_D_Correct))
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}
sym.$("_Submit_Button").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${__Submit_Button}","touchend",function(sym,e){var selected_a=sym.getVariable("selected_a");var selected_b=sym.getVariable("selected_b");var selected_c=sym.getVariable("selected_c");var selected_d=sym.getVariable("selected_d");var answer_A_Correct=sym.getVariable("answer_A_Correct");var answer_B_Correct=sym.getVariable("answer_B_Correct");var answer_C_Correct=sym.getVariable("answer_C_Correct");var answer_D_Correct=sym.getVariable("answer_D_Correct");if((selected_a==answer_A_Correct)&&(selected_b==answer_B_Correct)&&(selected_c==answer_C_Correct)&&(selected_d==answer_D_Correct))
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}
sym.$("_Submit_Button").hide();});
//Edge binding end
})("Question_07_Choices");
//Edge symbol end:'Question_07_Choices'

//=========================================================

//Edge symbol: 'Question_8_Content'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Answer_A}","mouseup",function(sym,e){var answer_A_Correct=sym.getVariable("answer_A_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_a")!=undefined)
{var selected_a=sym.getVariable("selected_a");}
else
{var selected_a=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_a==false)
{selected_a=true;sym.getSymbol("Answer_A").stop("Down");}
else if(selected_a==true)
{selected_a=false;}
sym.setVariable("selected_a",selected_a);sym.getSymbol("Answer_A").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_A").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_a")==true)
{sym.getSymbol("Answer_A").stop("Down");}
else
{sym.getSymbol("Answer_A").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_A_Correct==true)
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_A}","touchend",function(sym,e){var answer_A_Correct=sym.getVariable("answer_A_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_a")!=undefined)
{var selected_a=sym.getVariable("selected_a");}
else
{var selected_a=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_a==false)
{selected_a=true;sym.getSymbol("Answer_A").stop("Down");}
else if(selected_a==true)
{selected_a=false;}
sym.setVariable("selected_a",selected_a);sym.getSymbol("Answer_A").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_A").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_a")==true)
{sym.getSymbol("Answer_A").stop("Down");}
else
{sym.getSymbol("Answer_A").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_A_Correct==true)
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_B}","mouseup",function(sym,e){var answer_B_Correct=sym.getVariable("answer_B_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_b")!=undefined)
{var selected_b=sym.getVariable("selected_b");}
else
{var selected_b=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_b==false)
{selected_b=true;sym.getSymbol("Answer_B").stop("Down");}
else if(selected_b==true)
{selected_b=false;}
sym.setVariable("selected_b",selected_b);sym.getSymbol("Answer_B").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_B").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_b")==true)
{sym.getSymbol("Answer_B").stop("Down");}
else
{sym.getSymbol("Answer_B").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_B_Correct==true)
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_B}","touchend",function(sym,e){var answer_B_Correct=sym.getVariable("answer_B_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_b")!=undefined)
{var selected_b=sym.getVariable("selected_b");}
else
{var selected_b=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_b==false)
{selected_b=true;sym.getSymbol("Answer_B").stop("Down");}
else if(selected_b==true)
{selected_b=false;}
sym.setVariable("selected_b",selected_b);sym.getSymbol("Answer_B").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_B").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_b")==true)
{sym.getSymbol("Answer_B").stop("Down");}
else
{sym.getSymbol("Answer_B").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_B_Correct==true)
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_C}","mouseup",function(sym,e){var answer_C_Correct=sym.getVariable("answer_C_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_c")!=undefined)
{var selected_c=sym.getVariable("selected_c");}
else
{var selected_c=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_c==false)
{selected_c=true;sym.getSymbol("Answer_C").stop("Down");}
else if(selected_c==true)
{selected_c=false;}
sym.setVariable("selected_c",selected_c);sym.getSymbol("Answer_C").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_C").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_c")==true)
{sym.getSymbol("Answer_C").stop("Down");}
else
{sym.getSymbol("Answer_C").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_C_Correct==true){EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_C}","touchend",function(sym,e){var answer_C_Correct=sym.getVariable("answer_C_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_c")!=undefined)
{var selected_c=sym.getVariable("selected_c");}
else
{var selected_c=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_c==false)
{selected_c=true;sym.getSymbol("Answer_C").stop("Down");}
else if(selected_c==true)
{selected_c=false;}
sym.setVariable("selected_c",selected_c);sym.getSymbol("Answer_C").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_C").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_c")==true)
{sym.getSymbol("Answer_C").stop("Down");}
else
{sym.getSymbol("Answer_C").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_C_Correct==true){EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_D}","mouseup",function(sym,e){var answer_D_Correct=sym.getVariable("answer_D_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_d")!=undefined)
{var selected_d=sym.getVariable("selected_d");}
else
{var selected_d=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_d==false)
{selected_d=true;sym.getSymbol("Answer_D").stop("Down");}
else if(selected_d==true)
{selected_d=false;}
sym.setVariable("selected_d",selected_d);sym.getSymbol("Answer_D").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_D").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_d")==true)
{sym.getSymbol("Answer_D").stop("Down");}
else
{sym.getSymbol("Answer_D").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_D_Correct==true)
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");;}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_D}","touchend",function(sym,e){var answer_D_Correct=sym.getVariable("answer_D_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_d")!=undefined)
{var selected_d=sym.getVariable("selected_d");}
else
{var selected_d=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_d==false)
{selected_d=true;sym.getSymbol("Answer_D").stop("Down");}
else if(selected_d==true)
{selected_d=false;}
sym.setVariable("selected_d",selected_d);sym.getSymbol("Answer_D").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_D").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_d")==true)
{sym.getSymbol("Answer_D").stop("Down");}
else
{sym.getSymbol("Answer_D").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_D_Correct==true)
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");;}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Continue_BTN}","mouseup",function(sym,e){var questionCtr=sym.getParentSymbol().getVariable("questionCtr");sym.getParentSymbol().stop("Game_Board");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Card").stop("Disabled");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Card").$("cursor").hide();sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Card").$("Card_Trigger").hide();sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Dice").stop("Up");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Dice").$("Cursor").show();sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Dice").$("Dice_Trigger").show();EC.Sound.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Continue_BTN}","touchend",function(sym,e){var questionCtr=sym.getParentSymbol().getVariable("questionCtr");sym.getParentSymbol().stop("Game_Board");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Card").stop("Disabled");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Card").$("cursor").hide();sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Card").$("Card_Trigger").hide();sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Dice").stop("Up");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Dice").$("Cursor").show();sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Dice").$("Dice_Trigger").show();EC.Sound.stop();});
//Edge binding end
Symbol.bindSymbolAction(compId,symbolName,"creationComplete",function(sym,e){sym.setVariable("multipleAnswers",false);sym.setVariable("answer_A_Correct",true);sym.setVariable("answer_B_Correct",false);sym.setVariable("answer_C_Correct",false);sym.setVariable("answer_D_Correct",false);sym.setVariable("numOfDistractors",4);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){var numOfDistractors=sym.getVariable("numOfDistractors");sym.setVariable("selected_a",false);sym.setVariable("selected_b",false);sym.setVariable("selected_c",false);sym.setVariable("selected_d",false);if(numOfDistractors==1)
{sym.$("Answer_B").hide();sym.$("Answer_C").hide();sym.$("Answer_D").hide();}
else if(numOfDistractors==2)
{sym.$("Answer_C").hide();sym.$("Answer_D").hide();}
else if(numOfDistractors==3)
{sym.$("Answer_D").hide();}
if(sym.getVariable("multipleAnswers")==true)
{sym.$("_Submit_Button").show();}
else
{sym.$("_Submit_Button").hide();}
sym.getSymbol("Answer_A").stop("Up");sym.getSymbol("Answer_B").stop("Up");sym.getSymbol("Answer_C").stop("Up");sym.getSymbol("Answer_D").stop("Up");sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${__Submit_Button}","mouseup",function(sym,e){var selected_a=sym.getVariable("selected_a");var selected_b=sym.getVariable("selected_b");var selected_c=sym.getVariable("selected_c");var selected_d=sym.getVariable("selected_d");var answer_A_Correct=sym.getVariable("answer_A_Correct");var answer_B_Correct=sym.getVariable("answer_B_Correct");var answer_C_Correct=sym.getVariable("answer_C_Correct");var answer_D_Correct=sym.getVariable("answer_D_Correct");if((selected_a==answer_A_Correct)&&(selected_b==answer_B_Correct)&&(selected_c==answer_C_Correct)&&(selected_d==answer_D_Correct))
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}
sym.$("_Submit_Button").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${__Submit_Button}","touchend",function(sym,e){var selected_a=sym.getVariable("selected_a");var selected_b=sym.getVariable("selected_b");var selected_c=sym.getVariable("selected_c");var selected_d=sym.getVariable("selected_d");var answer_A_Correct=sym.getVariable("answer_A_Correct");var answer_B_Correct=sym.getVariable("answer_B_Correct");var answer_C_Correct=sym.getVariable("answer_C_Correct");var answer_D_Correct=sym.getVariable("answer_D_Correct");if((selected_a==answer_A_Correct)&&(selected_b==answer_B_Correct)&&(selected_c==answer_C_Correct)&&(selected_d==answer_D_Correct))
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}
sym.$("_Submit_Button").hide();});
//Edge binding end
})("Question_08_Choices");
//Edge symbol end:'Question_08_Choices'

//=========================================================

//Edge symbol: 'Question_9_Content'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Answer_A}","mouseup",function(sym,e){var answer_A_Correct=sym.getVariable("answer_A_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_a")!=undefined)
{var selected_a=sym.getVariable("selected_a");}
else
{var selected_a=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_a==false)
{selected_a=true;sym.getSymbol("Answer_A").stop("Down");}
else if(selected_a==true)
{selected_a=false;}
sym.setVariable("selected_a",selected_a);sym.getSymbol("Answer_A").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_A").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_a")==true)
{sym.getSymbol("Answer_A").stop("Down");}
else
{sym.getSymbol("Answer_A").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_A_Correct==true)
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_A}","touchend",function(sym,e){var answer_A_Correct=sym.getVariable("answer_A_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_a")!=undefined)
{var selected_a=sym.getVariable("selected_a");}
else
{var selected_a=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_a==false)
{selected_a=true;sym.getSymbol("Answer_A").stop("Down");}
else if(selected_a==true)
{selected_a=false;}
sym.setVariable("selected_a",selected_a);sym.getSymbol("Answer_A").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_A").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_a")==true)
{sym.getSymbol("Answer_A").stop("Down");}
else
{sym.getSymbol("Answer_A").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_A_Correct==true)
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_B}","mouseup",function(sym,e){var answer_B_Correct=sym.getVariable("answer_B_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_b")!=undefined)
{var selected_b=sym.getVariable("selected_b");}
else
{var selected_b=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_b==false)
{selected_b=true;sym.getSymbol("Answer_B").stop("Down");}
else if(selected_b==true)
{selected_b=false;}
sym.setVariable("selected_b",selected_b);sym.getSymbol("Answer_B").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_B").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_b")==true)
{sym.getSymbol("Answer_B").stop("Down");}
else
{sym.getSymbol("Answer_B").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_B_Correct==true)
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_B}","touchend",function(sym,e){var answer_B_Correct=sym.getVariable("answer_B_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_b")!=undefined)
{var selected_b=sym.getVariable("selected_b");}
else
{var selected_b=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_b==false)
{selected_b=true;sym.getSymbol("Answer_B").stop("Down");}
else if(selected_b==true)
{selected_b=false;}
sym.setVariable("selected_b",selected_b);sym.getSymbol("Answer_B").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_B").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_b")==true)
{sym.getSymbol("Answer_B").stop("Down");}
else
{sym.getSymbol("Answer_B").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_B_Correct==true)
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_C}","mouseup",function(sym,e){var answer_C_Correct=sym.getVariable("answer_C_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_c")!=undefined)
{var selected_c=sym.getVariable("selected_c");}
else
{var selected_c=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_c==false)
{selected_c=true;sym.getSymbol("Answer_C").stop("Down");}
else if(selected_c==true)
{selected_c=false;}
sym.setVariable("selected_c",selected_c);sym.getSymbol("Answer_C").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_C").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_c")==true)
{sym.getSymbol("Answer_C").stop("Down");}
else
{sym.getSymbol("Answer_C").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_C_Correct==true){EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_C}","touchend",function(sym,e){var answer_C_Correct=sym.getVariable("answer_C_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_c")!=undefined)
{var selected_c=sym.getVariable("selected_c");}
else
{var selected_c=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_c==false)
{selected_c=true;sym.getSymbol("Answer_C").stop("Down");}
else if(selected_c==true)
{selected_c=false;}
sym.setVariable("selected_c",selected_c);sym.getSymbol("Answer_C").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_C").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_c")==true)
{sym.getSymbol("Answer_C").stop("Down");}
else
{sym.getSymbol("Answer_C").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_C_Correct==true){EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_D}","mouseup",function(sym,e){var answer_D_Correct=sym.getVariable("answer_D_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_d")!=undefined)
{var selected_d=sym.getVariable("selected_d");}
else
{var selected_d=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_d==false)
{selected_d=true;sym.getSymbol("Answer_D").stop("Down");}
else if(selected_d==true)
{selected_d=false;}
sym.setVariable("selected_d",selected_d);sym.getSymbol("Answer_D").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_D").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_d")==true)
{sym.getSymbol("Answer_D").stop("Down");}
else
{sym.getSymbol("Answer_D").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_D_Correct==true)
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");;}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_D}","touchend",function(sym,e){var answer_D_Correct=sym.getVariable("answer_D_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_d")!=undefined)
{var selected_d=sym.getVariable("selected_d");}
else
{var selected_d=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_d==false)
{selected_d=true;sym.getSymbol("Answer_D").stop("Down");}
else if(selected_d==true)
{selected_d=false;}
sym.setVariable("selected_d",selected_d);sym.getSymbol("Answer_D").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_D").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_d")==true)
{sym.getSymbol("Answer_D").stop("Down");}
else
{sym.getSymbol("Answer_D").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_D_Correct==true)
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");;}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Continue_BTN}","mouseup",function(sym,e){var questionCtr=sym.getParentSymbol().getVariable("questionCtr");sym.getParentSymbol().stop("Game_Board");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Card").stop("Disabled");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Card").$("cursor").hide();sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Card").$("Card_Trigger").hide();sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Dice").stop("Up");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Dice").$("Cursor").show();sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Dice").$("Dice_Trigger").show();EC.Sound.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Continue_BTN}","touchend",function(sym,e){var questionCtr=sym.getParentSymbol().getVariable("questionCtr");sym.getParentSymbol().stop("Game_Board");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Card").stop("Disabled");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Card").$("cursor").hide();sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Card").$("Card_Trigger").hide();sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Dice").stop("Up");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Dice").$("Cursor").show();sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Dice").$("Dice_Trigger").show();EC.Sound.stop();});
//Edge binding end
Symbol.bindSymbolAction(compId,symbolName,"creationComplete",function(sym,e){sym.setVariable("multipleAnswers",false);sym.setVariable("answer_A_Correct",false);sym.setVariable("answer_B_Correct",true);sym.setVariable("answer_C_Correct",false);sym.setVariable("answer_D_Correct",false);sym.setVariable("numOfDistractors",4);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){var numOfDistractors=sym.getVariable("numOfDistractors");sym.setVariable("selected_a",false);sym.setVariable("selected_b",false);sym.setVariable("selected_c",false);sym.setVariable("selected_d",false);if(numOfDistractors==1)
{sym.$("Answer_B").hide();sym.$("Answer_C").hide();sym.$("Answer_D").hide();}
else if(numOfDistractors==2)
{sym.$("Answer_C").hide();sym.$("Answer_D").hide();}
else if(numOfDistractors==3)
{sym.$("Answer_D").hide();}
if(sym.getVariable("multipleAnswers")==true)
{sym.$("_Submit_Button").show();}
else
{sym.$("_Submit_Button").hide();}
sym.getSymbol("Answer_A").stop("Up");sym.getSymbol("Answer_B").stop("Up");sym.getSymbol("Answer_C").stop("Up");sym.getSymbol("Answer_D").stop("Up");sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${__Submit_Button}","mouseup",function(sym,e){var selected_a=sym.getVariable("selected_a");var selected_b=sym.getVariable("selected_b");var selected_c=sym.getVariable("selected_c");var selected_d=sym.getVariable("selected_d");var answer_A_Correct=sym.getVariable("answer_A_Correct");var answer_B_Correct=sym.getVariable("answer_B_Correct");var answer_C_Correct=sym.getVariable("answer_C_Correct");var answer_D_Correct=sym.getVariable("answer_D_Correct");if((selected_a==answer_A_Correct)&&(selected_b==answer_B_Correct)&&(selected_c==answer_C_Correct)&&(selected_d==answer_D_Correct))
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}
sym.$("_Submit_Button").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${__Submit_Button}","touchend",function(sym,e){var selected_a=sym.getVariable("selected_a");var selected_b=sym.getVariable("selected_b");var selected_c=sym.getVariable("selected_c");var selected_d=sym.getVariable("selected_d");var answer_A_Correct=sym.getVariable("answer_A_Correct");var answer_B_Correct=sym.getVariable("answer_B_Correct");var answer_C_Correct=sym.getVariable("answer_C_Correct");var answer_D_Correct=sym.getVariable("answer_D_Correct");if((selected_a==answer_A_Correct)&&(selected_b==answer_B_Correct)&&(selected_c==answer_C_Correct)&&(selected_d==answer_D_Correct))
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}
sym.$("_Submit_Button").hide();});
//Edge binding end
})("Question_09_Choices");
//Edge symbol end:'Question_09_Choices'

//=========================================================

//Edge symbol: 'Question_10_Content'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Answer_A}","mouseup",function(sym,e){var answer_A_Correct=sym.getVariable("answer_A_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_a")!=undefined)
{var selected_a=sym.getVariable("selected_a");}
else
{var selected_a=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_a==false)
{selected_a=true;sym.getSymbol("Answer_A").stop("Down");}
else if(selected_a==true)
{selected_a=false;}
sym.setVariable("selected_a",selected_a);sym.getSymbol("Answer_A").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_A").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_a")==true)
{sym.getSymbol("Answer_A").stop("Down");}
else
{sym.getSymbol("Answer_A").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_A_Correct==true)
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_A}","touchend",function(sym,e){var answer_A_Correct=sym.getVariable("answer_A_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_a")!=undefined)
{var selected_a=sym.getVariable("selected_a");}
else
{var selected_a=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_a==false)
{selected_a=true;sym.getSymbol("Answer_A").stop("Down");}
else if(selected_a==true)
{selected_a=false;}
sym.setVariable("selected_a",selected_a);sym.getSymbol("Answer_A").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_A").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_a")==true)
{sym.getSymbol("Answer_A").stop("Down");}
else
{sym.getSymbol("Answer_A").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_A_Correct==true)
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_B}","mouseup",function(sym,e){var answer_B_Correct=sym.getVariable("answer_B_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_b")!=undefined)
{var selected_b=sym.getVariable("selected_b");}
else
{var selected_b=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_b==false)
{selected_b=true;sym.getSymbol("Answer_B").stop("Down");}
else if(selected_b==true)
{selected_b=false;}
sym.setVariable("selected_b",selected_b);sym.getSymbol("Answer_B").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_B").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_b")==true)
{sym.getSymbol("Answer_B").stop("Down");}
else
{sym.getSymbol("Answer_B").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_B_Correct==true)
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_B}","touchend",function(sym,e){var answer_B_Correct=sym.getVariable("answer_B_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_b")!=undefined)
{var selected_b=sym.getVariable("selected_b");}
else
{var selected_b=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_b==false)
{selected_b=true;sym.getSymbol("Answer_B").stop("Down");}
else if(selected_b==true)
{selected_b=false;}
sym.setVariable("selected_b",selected_b);sym.getSymbol("Answer_B").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_B").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_b")==true)
{sym.getSymbol("Answer_B").stop("Down");}
else
{sym.getSymbol("Answer_B").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_B_Correct==true)
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_C}","mouseup",function(sym,e){var answer_C_Correct=sym.getVariable("answer_C_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_c")!=undefined)
{var selected_c=sym.getVariable("selected_c");}
else
{var selected_c=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_c==false)
{selected_c=true;sym.getSymbol("Answer_C").stop("Down");}
else if(selected_c==true)
{selected_c=false;}
sym.setVariable("selected_c",selected_c);sym.getSymbol("Answer_C").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_C").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_c")==true)
{sym.getSymbol("Answer_C").stop("Down");}
else
{sym.getSymbol("Answer_C").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_C_Correct==true){EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_C}","touchend",function(sym,e){var answer_C_Correct=sym.getVariable("answer_C_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_c")!=undefined)
{var selected_c=sym.getVariable("selected_c");}
else
{var selected_c=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_c==false)
{selected_c=true;sym.getSymbol("Answer_C").stop("Down");}
else if(selected_c==true)
{selected_c=false;}
sym.setVariable("selected_c",selected_c);sym.getSymbol("Answer_C").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_C").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_c")==true)
{sym.getSymbol("Answer_C").stop("Down");}
else
{sym.getSymbol("Answer_C").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_C_Correct==true){EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_D}","mouseup",function(sym,e){var answer_D_Correct=sym.getVariable("answer_D_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_d")!=undefined)
{var selected_d=sym.getVariable("selected_d");}
else
{var selected_d=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_d==false)
{selected_d=true;sym.getSymbol("Answer_D").stop("Down");}
else if(selected_d==true)
{selected_d=false;}
sym.setVariable("selected_d",selected_d);sym.getSymbol("Answer_D").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_D").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_d")==true)
{sym.getSymbol("Answer_D").stop("Down");}
else
{sym.getSymbol("Answer_D").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_D_Correct==true)
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");;}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_D}","touchend",function(sym,e){var answer_D_Correct=sym.getVariable("answer_D_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_d")!=undefined)
{var selected_d=sym.getVariable("selected_d");}
else
{var selected_d=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_d==false)
{selected_d=true;sym.getSymbol("Answer_D").stop("Down");}
else if(selected_d==true)
{selected_d=false;}
sym.setVariable("selected_d",selected_d);sym.getSymbol("Answer_D").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_D").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_d")==true)
{sym.getSymbol("Answer_D").stop("Down");}
else
{sym.getSymbol("Answer_D").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_D_Correct==true)
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");;}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Continue_BTN}","mouseup",function(sym,e){var questionCtr=sym.getParentSymbol().getVariable("questionCtr");sym.getParentSymbol().stop("Game_Board");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Card").stop("Disabled");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Card").$("cursor").hide();sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Card").$("Card_Trigger").hide();sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Dice").stop("Up");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Dice").$("Cursor").show();sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Dice").$("Dice_Trigger").show();EC.Sound.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Continue_BTN}","touchend",function(sym,e){var questionCtr=sym.getParentSymbol().getVariable("questionCtr");sym.getParentSymbol().stop("Game_Board");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Card").stop("Disabled");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Card").$("cursor").hide();sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Card").$("Card_Trigger").hide();sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Dice").stop("Up");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Dice").$("Cursor").show();sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Dice").$("Dice_Trigger").show();EC.Sound.stop();});
//Edge binding end
Symbol.bindSymbolAction(compId,symbolName,"creationComplete",function(sym,e){sym.setVariable("multipleAnswers",false);sym.setVariable("answer_A_Correct",false);sym.setVariable("answer_B_Correct",false);sym.setVariable("answer_C_Correct",true);sym.setVariable("answer_D_Correct",false);sym.setVariable("numOfDistractors",4);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){var numOfDistractors=sym.getVariable("numOfDistractors");sym.setVariable("selected_a",false);sym.setVariable("selected_b",false);sym.setVariable("selected_c",false);sym.setVariable("selected_d",false);if(numOfDistractors==1)
{sym.$("Answer_B").hide();sym.$("Answer_C").hide();sym.$("Answer_D").hide();}
else if(numOfDistractors==2)
{sym.$("Answer_C").hide();sym.$("Answer_D").hide();}
else if(numOfDistractors==3)
{sym.$("Answer_D").hide();}
if(sym.getVariable("multipleAnswers")==true)
{sym.$("_Submit_Button").show();}
else
{sym.$("_Submit_Button").hide();}
sym.getSymbol("Answer_A").stop("Up");sym.getSymbol("Answer_B").stop("Up");sym.getSymbol("Answer_C").stop("Up");sym.getSymbol("Answer_D").stop("Up");sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${__Submit_Button}","mouseup",function(sym,e){var selected_a=sym.getVariable("selected_a");var selected_b=sym.getVariable("selected_b");var selected_c=sym.getVariable("selected_c");var selected_d=sym.getVariable("selected_d");var answer_A_Correct=sym.getVariable("answer_A_Correct");var answer_B_Correct=sym.getVariable("answer_B_Correct");var answer_C_Correct=sym.getVariable("answer_C_Correct");var answer_D_Correct=sym.getVariable("answer_D_Correct");if((selected_a==answer_A_Correct)&&(selected_b==answer_B_Correct)&&(selected_c==answer_C_Correct)&&(selected_d==answer_D_Correct))
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}
sym.$("_Submit_Button").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${__Submit_Button}","touchend",function(sym,e){var selected_a=sym.getVariable("selected_a");var selected_b=sym.getVariable("selected_b");var selected_c=sym.getVariable("selected_c");var selected_d=sym.getVariable("selected_d");var answer_A_Correct=sym.getVariable("answer_A_Correct");var answer_B_Correct=sym.getVariable("answer_B_Correct");var answer_C_Correct=sym.getVariable("answer_C_Correct");var answer_D_Correct=sym.getVariable("answer_D_Correct");if((selected_a==answer_A_Correct)&&(selected_b==answer_B_Correct)&&(selected_c==answer_C_Correct)&&(selected_d==answer_D_Correct))
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}
sym.$("_Submit_Button").hide();});
//Edge binding end
})("Question_10_Choices");
//Edge symbol end:'Question_10_Choices'

//=========================================================

//Edge symbol: 'Question_11_Content'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Answer_A}","mouseup",function(sym,e){var answer_A_Correct=sym.getVariable("answer_A_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_a")!=undefined)
{var selected_a=sym.getVariable("selected_a");}
else
{var selected_a=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_a==false)
{selected_a=true;sym.getSymbol("Answer_A").stop("Down");}
else if(selected_a==true)
{selected_a=false;}
sym.setVariable("selected_a",selected_a);sym.getSymbol("Answer_A").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_A").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_a")==true)
{sym.getSymbol("Answer_A").stop("Down");}
else
{sym.getSymbol("Answer_A").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_A_Correct==true)
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_A}","touchend",function(sym,e){var answer_A_Correct=sym.getVariable("answer_A_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_a")!=undefined)
{var selected_a=sym.getVariable("selected_a");}
else
{var selected_a=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_a==false)
{selected_a=true;sym.getSymbol("Answer_A").stop("Down");}
else if(selected_a==true)
{selected_a=false;}
sym.setVariable("selected_a",selected_a);sym.getSymbol("Answer_A").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_A").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_a")==true)
{sym.getSymbol("Answer_A").stop("Down");}
else
{sym.getSymbol("Answer_A").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_A_Correct==true)
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_B}","mouseup",function(sym,e){var answer_B_Correct=sym.getVariable("answer_B_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_b")!=undefined)
{var selected_b=sym.getVariable("selected_b");}
else
{var selected_b=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_b==false)
{selected_b=true;sym.getSymbol("Answer_B").stop("Down");}
else if(selected_b==true)
{selected_b=false;}
sym.setVariable("selected_b",selected_b);sym.getSymbol("Answer_B").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_B").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_b")==true)
{sym.getSymbol("Answer_B").stop("Down");}
else
{sym.getSymbol("Answer_B").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_B_Correct==true)
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_B}","touchend",function(sym,e){var answer_B_Correct=sym.getVariable("answer_B_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_b")!=undefined)
{var selected_b=sym.getVariable("selected_b");}
else
{var selected_b=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_b==false)
{selected_b=true;sym.getSymbol("Answer_B").stop("Down");}
else if(selected_b==true)
{selected_b=false;}
sym.setVariable("selected_b",selected_b);sym.getSymbol("Answer_B").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_B").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_b")==true)
{sym.getSymbol("Answer_B").stop("Down");}
else
{sym.getSymbol("Answer_B").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_B_Correct==true)
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_C}","mouseup",function(sym,e){var answer_C_Correct=sym.getVariable("answer_C_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_c")!=undefined)
{var selected_c=sym.getVariable("selected_c");}
else
{var selected_c=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_c==false)
{selected_c=true;sym.getSymbol("Answer_C").stop("Down");}
else if(selected_c==true)
{selected_c=false;}
sym.setVariable("selected_c",selected_c);sym.getSymbol("Answer_C").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_C").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_c")==true)
{sym.getSymbol("Answer_C").stop("Down");}
else
{sym.getSymbol("Answer_C").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_C_Correct==true){EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_C}","touchend",function(sym,e){var answer_C_Correct=sym.getVariable("answer_C_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_c")!=undefined)
{var selected_c=sym.getVariable("selected_c");}
else
{var selected_c=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_c==false)
{selected_c=true;sym.getSymbol("Answer_C").stop("Down");}
else if(selected_c==true)
{selected_c=false;}
sym.setVariable("selected_c",selected_c);sym.getSymbol("Answer_C").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_C").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_c")==true)
{sym.getSymbol("Answer_C").stop("Down");}
else
{sym.getSymbol("Answer_C").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_C_Correct==true){EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_D}","mouseup",function(sym,e){var answer_D_Correct=sym.getVariable("answer_D_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_d")!=undefined)
{var selected_d=sym.getVariable("selected_d");}
else
{var selected_d=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_d==false)
{selected_d=true;sym.getSymbol("Answer_D").stop("Down");}
else if(selected_d==true)
{selected_d=false;}
sym.setVariable("selected_d",selected_d);sym.getSymbol("Answer_D").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_D").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_d")==true)
{sym.getSymbol("Answer_D").stop("Down");}
else
{sym.getSymbol("Answer_D").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_D_Correct==true)
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");;}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_D}","touchend",function(sym,e){var answer_D_Correct=sym.getVariable("answer_D_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_d")!=undefined)
{var selected_d=sym.getVariable("selected_d");}
else
{var selected_d=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_d==false)
{selected_d=true;sym.getSymbol("Answer_D").stop("Down");}
else if(selected_d==true)
{selected_d=false;}
sym.setVariable("selected_d",selected_d);sym.getSymbol("Answer_D").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_D").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_d")==true)
{sym.getSymbol("Answer_D").stop("Down");}
else
{sym.getSymbol("Answer_D").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_D_Correct==true)
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");;}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Continue_BTN}","mouseup",function(sym,e){var questionCtr=sym.getParentSymbol().getVariable("questionCtr");sym.getParentSymbol().stop("Game_Board");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Card").stop("Disabled");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Card").$("cursor").hide();sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Card").$("Card_Trigger").hide();sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Dice").stop("Up");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Dice").$("Cursor").show();sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Dice").$("Dice_Trigger").show();EC.Sound.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Continue_BTN}","touchend",function(sym,e){var questionCtr=sym.getParentSymbol().getVariable("questionCtr");sym.getParentSymbol().stop("Game_Board");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Card").stop("Disabled");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Card").$("cursor").hide();sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Card").$("Card_Trigger").hide();sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Dice").stop("Up");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Dice").$("Cursor").show();sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Dice").$("Dice_Trigger").show();EC.Sound.stop();});
//Edge binding end
Symbol.bindSymbolAction(compId,symbolName,"creationComplete",function(sym,e){sym.setVariable("multipleAnswers",false);sym.setVariable("answer_A_Correct",false);sym.setVariable("answer_B_Correct",false);sym.setVariable("answer_C_Correct",false);sym.setVariable("answer_D_Correct",true);sym.setVariable("numOfDistractors",4);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){var numOfDistractors=sym.getVariable("numOfDistractors");sym.setVariable("selected_a",false);sym.setVariable("selected_b",false);sym.setVariable("selected_c",false);sym.setVariable("selected_d",false);if(numOfDistractors==1)
{sym.$("Answer_B").hide();sym.$("Answer_C").hide();sym.$("Answer_D").hide();}
else if(numOfDistractors==2)
{sym.$("Answer_C").hide();sym.$("Answer_D").hide();}
else if(numOfDistractors==3)
{sym.$("Answer_D").hide();}
if(sym.getVariable("multipleAnswers")==true)
{sym.$("_Submit_Button").show();}
else
{sym.$("_Submit_Button").hide();}
sym.getSymbol("Answer_A").stop("Up");sym.getSymbol("Answer_B").stop("Up");sym.getSymbol("Answer_C").stop("Up");sym.getSymbol("Answer_D").stop("Up");sym.stop()});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${__Submit_Button}","mouseup",function(sym,e){var selected_a=sym.getVariable("selected_a");var selected_b=sym.getVariable("selected_b");var selected_c=sym.getVariable("selected_c");var selected_d=sym.getVariable("selected_d");var answer_A_Correct=sym.getVariable("answer_A_Correct");var answer_B_Correct=sym.getVariable("answer_B_Correct");var answer_C_Correct=sym.getVariable("answer_C_Correct");var answer_D_Correct=sym.getVariable("answer_D_Correct");if((selected_a==answer_A_Correct)&&(selected_b==answer_B_Correct)&&(selected_c==answer_C_Correct)&&(selected_d==answer_D_Correct))
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}
sym.$("_Submit_Button").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${__Submit_Button}","touchend",function(sym,e){var selected_a=sym.getVariable("selected_a");var selected_b=sym.getVariable("selected_b");var selected_c=sym.getVariable("selected_c");var selected_d=sym.getVariable("selected_d");var answer_A_Correct=sym.getVariable("answer_A_Correct");var answer_B_Correct=sym.getVariable("answer_B_Correct");var answer_C_Correct=sym.getVariable("answer_C_Correct");var answer_D_Correct=sym.getVariable("answer_D_Correct");if((selected_a==answer_A_Correct)&&(selected_b==answer_B_Correct)&&(selected_c==answer_C_Correct)&&(selected_d==answer_D_Correct))
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}
sym.$("_Submit_Button").hide();});
//Edge binding end
})("Question_11_Choices");
//Edge symbol end:'Question_11_Choices'

//=========================================================

//Edge symbol: 'Question_12_Content'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Answer_A}","mouseup",function(sym,e){var answer_A_Correct=sym.getVariable("answer_A_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_a")!=undefined)
{var selected_a=sym.getVariable("selected_a");}
else
{var selected_a=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_a==false)
{selected_a=true;sym.getSymbol("Answer_A").stop("Down");}
else if(selected_a==true)
{selected_a=false;}
sym.setVariable("selected_a",selected_a);sym.getSymbol("Answer_A").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_A").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_a")==true)
{sym.getSymbol("Answer_A").stop("Down");}
else
{sym.getSymbol("Answer_A").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_A_Correct==true)
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_A}","touchend",function(sym,e){var answer_A_Correct=sym.getVariable("answer_A_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_a")!=undefined)
{var selected_a=sym.getVariable("selected_a");}
else
{var selected_a=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_a==false)
{selected_a=true;sym.getSymbol("Answer_A").stop("Down");}
else if(selected_a==true)
{selected_a=false;}
sym.setVariable("selected_a",selected_a);sym.getSymbol("Answer_A").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_A").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_a")==true)
{sym.getSymbol("Answer_A").stop("Down");}
else
{sym.getSymbol("Answer_A").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_A_Correct==true)
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_B}","mouseup",function(sym,e){var answer_B_Correct=sym.getVariable("answer_B_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_b")!=undefined)
{var selected_b=sym.getVariable("selected_b");}
else
{var selected_b=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_b==false)
{selected_b=true;sym.getSymbol("Answer_B").stop("Down");}
else if(selected_b==true)
{selected_b=false;}
sym.setVariable("selected_b",selected_b);sym.getSymbol("Answer_B").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_B").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_b")==true)
{sym.getSymbol("Answer_B").stop("Down");}
else
{sym.getSymbol("Answer_B").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_B_Correct==true)
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_B}","touchend",function(sym,e){var answer_B_Correct=sym.getVariable("answer_B_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_b")!=undefined)
{var selected_b=sym.getVariable("selected_b");}
else
{var selected_b=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_b==false)
{selected_b=true;sym.getSymbol("Answer_B").stop("Down");}
else if(selected_b==true)
{selected_b=false;}
sym.setVariable("selected_b",selected_b);sym.getSymbol("Answer_B").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_B").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_b")==true)
{sym.getSymbol("Answer_B").stop("Down");}
else
{sym.getSymbol("Answer_B").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_B_Correct==true)
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_C}","mouseup",function(sym,e){var answer_C_Correct=sym.getVariable("answer_C_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_c")!=undefined)
{var selected_c=sym.getVariable("selected_c");}
else
{var selected_c=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_c==false)
{selected_c=true;sym.getSymbol("Answer_C").stop("Down");}
else if(selected_c==true)
{selected_c=false;}
sym.setVariable("selected_c",selected_c);sym.getSymbol("Answer_C").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_C").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_c")==true)
{sym.getSymbol("Answer_C").stop("Down");}
else
{sym.getSymbol("Answer_C").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_C_Correct==true){EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_C}","touchend",function(sym,e){var answer_C_Correct=sym.getVariable("answer_C_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_c")!=undefined)
{var selected_c=sym.getVariable("selected_c");}
else
{var selected_c=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_c==false)
{selected_c=true;sym.getSymbol("Answer_C").stop("Down");}
else if(selected_c==true)
{selected_c=false;}
sym.setVariable("selected_c",selected_c);sym.getSymbol("Answer_C").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_C").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_c")==true)
{sym.getSymbol("Answer_C").stop("Down");}
else
{sym.getSymbol("Answer_C").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_C_Correct==true){EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_D}","mouseup",function(sym,e){var answer_D_Correct=sym.getVariable("answer_D_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_d")!=undefined)
{var selected_d=sym.getVariable("selected_d");}
else
{var selected_d=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_d==false)
{selected_d=true;sym.getSymbol("Answer_D").stop("Down");}
else if(selected_d==true)
{selected_d=false;}
sym.setVariable("selected_d",selected_d);sym.getSymbol("Answer_D").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_D").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_d")==true)
{sym.getSymbol("Answer_D").stop("Down");}
else
{sym.getSymbol("Answer_D").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_D_Correct==true)
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");;}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_D}","touchend",function(sym,e){var answer_D_Correct=sym.getVariable("answer_D_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_d")!=undefined)
{var selected_d=sym.getVariable("selected_d");}
else
{var selected_d=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_d==false)
{selected_d=true;sym.getSymbol("Answer_D").stop("Down");}
else if(selected_d==true)
{selected_d=false;}
sym.setVariable("selected_d",selected_d);sym.getSymbol("Answer_D").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_D").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_d")==true)
{sym.getSymbol("Answer_D").stop("Down");}
else
{sym.getSymbol("Answer_D").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_D_Correct==true)
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");;}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Continue_BTN}","mouseup",function(sym,e){var questionCtr=sym.getParentSymbol().getVariable("questionCtr");sym.getParentSymbol().stop("Game_Board");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Card").stop("Disabled");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Card").$("cursor").hide();sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Card").$("Card_Trigger").hide();sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Dice").stop("Up");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Dice").$("Cursor").show();sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Dice").$("Dice_Trigger").show();EC.Sound.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Continue_BTN}","touchend",function(sym,e){var questionCtr=sym.getParentSymbol().getVariable("questionCtr");sym.getParentSymbol().stop("Game_Board");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Card").stop("Disabled");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Card").$("cursor").hide();sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Card").$("Card_Trigger").hide();sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Dice").stop("Up");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Dice").$("Cursor").show();sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Dice").$("Dice_Trigger").show();EC.Sound.stop();});
//Edge binding end
Symbol.bindSymbolAction(compId,symbolName,"creationComplete",function(sym,e){sym.setVariable("multipleAnswers",false);sym.setVariable("answer_A_Correct",true);sym.setVariable("answer_B_Correct",false);sym.setVariable("answer_C_Correct",false);sym.setVariable("answer_D_Correct",false);sym.setVariable("numOfDistractors",4);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){var numOfDistractors=sym.getVariable("numOfDistractors");sym.setVariable("selected_a",false);sym.setVariable("selected_b",false);sym.setVariable("selected_c",false);sym.setVariable("selected_d",false);if(numOfDistractors==1)
{sym.$("Answer_B").hide();sym.$("Answer_C").hide();sym.$("Answer_D").hide();}
else if(numOfDistractors==2)
{sym.$("Answer_C").hide();sym.$("Answer_D").hide();}
else if(numOfDistractors==3)
{sym.$("Answer_D").hide();}
if(sym.getVariable("multipleAnswers")==true)
{sym.$("_Submit_Button").show();}
else
{sym.$("_Submit_Button").hide();}
sym.getSymbol("Answer_A").stop("Up");sym.getSymbol("Answer_B").stop("Up");sym.getSymbol("Answer_C").stop("Up");sym.getSymbol("Answer_D").stop("Up");sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${__Submit_Button}","mouseup",function(sym,e){var selected_a=sym.getVariable("selected_a");var selected_b=sym.getVariable("selected_b");var selected_c=sym.getVariable("selected_c");var selected_d=sym.getVariable("selected_d");var answer_A_Correct=sym.getVariable("answer_A_Correct");var answer_B_Correct=sym.getVariable("answer_B_Correct");var answer_C_Correct=sym.getVariable("answer_C_Correct");var answer_D_Correct=sym.getVariable("answer_D_Correct");if((selected_a==answer_A_Correct)&&(selected_b==answer_B_Correct)&&(selected_c==answer_C_Correct)&&(selected_d==answer_D_Correct))
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}
sym.$("_Submit_Button").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${__Submit_Button}","touchend",function(sym,e){var selected_a=sym.getVariable("selected_a");var selected_b=sym.getVariable("selected_b");var selected_c=sym.getVariable("selected_c");var selected_d=sym.getVariable("selected_d");var answer_A_Correct=sym.getVariable("answer_A_Correct");var answer_B_Correct=sym.getVariable("answer_B_Correct");var answer_C_Correct=sym.getVariable("answer_C_Correct");var answer_D_Correct=sym.getVariable("answer_D_Correct");if((selected_a==answer_A_Correct)&&(selected_b==answer_B_Correct)&&(selected_c==answer_C_Correct)&&(selected_d==answer_D_Correct))
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}
sym.$("_Submit_Button").hide();});
//Edge binding end
})("Question_12_Choices");
//Edge symbol end:'Question_12_Choices'

//=========================================================

//Edge symbol: 'Question_13_Content'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Answer_A}","mouseup",function(sym,e){var answer_A_Correct=sym.getVariable("answer_A_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_a")!=undefined)
{var selected_a=sym.getVariable("selected_a");}
else
{var selected_a=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_a==false)
{selected_a=true;sym.getSymbol("Answer_A").stop("Down");}
else if(selected_a==true)
{selected_a=false;}
sym.setVariable("selected_a",selected_a);sym.getSymbol("Answer_A").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_A").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_a")==true)
{sym.getSymbol("Answer_A").stop("Down");}
else
{sym.getSymbol("Answer_A").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_A_Correct==true)
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_A}","touchend",function(sym,e){var answer_A_Correct=sym.getVariable("answer_A_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_a")!=undefined)
{var selected_a=sym.getVariable("selected_a");}
else
{var selected_a=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_a==false)
{selected_a=true;sym.getSymbol("Answer_A").stop("Down");}
else if(selected_a==true)
{selected_a=false;}
sym.setVariable("selected_a",selected_a);sym.getSymbol("Answer_A").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_A").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_a")==true)
{sym.getSymbol("Answer_A").stop("Down");}
else
{sym.getSymbol("Answer_A").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_A_Correct==true)
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_B}","mouseup",function(sym,e){var answer_B_Correct=sym.getVariable("answer_B_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_b")!=undefined)
{var selected_b=sym.getVariable("selected_b");}
else
{var selected_b=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_b==false)
{selected_b=true;sym.getSymbol("Answer_B").stop("Down");}
else if(selected_b==true)
{selected_b=false;}
sym.setVariable("selected_b",selected_b);sym.getSymbol("Answer_B").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_B").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_b")==true)
{sym.getSymbol("Answer_B").stop("Down");}
else
{sym.getSymbol("Answer_B").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_B_Correct==true)
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_B}","touchend",function(sym,e){var answer_B_Correct=sym.getVariable("answer_B_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_b")!=undefined)
{var selected_b=sym.getVariable("selected_b");}
else
{var selected_b=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_b==false)
{selected_b=true;sym.getSymbol("Answer_B").stop("Down");}
else if(selected_b==true)
{selected_b=false;}
sym.setVariable("selected_b",selected_b);sym.getSymbol("Answer_B").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_B").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_b")==true)
{sym.getSymbol("Answer_B").stop("Down");}
else
{sym.getSymbol("Answer_B").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_B_Correct==true)
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_C}","mouseup",function(sym,e){var answer_C_Correct=sym.getVariable("answer_C_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_c")!=undefined)
{var selected_c=sym.getVariable("selected_c");}
else
{var selected_c=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_c==false)
{selected_c=true;sym.getSymbol("Answer_C").stop("Down");}
else if(selected_c==true)
{selected_c=false;}
sym.setVariable("selected_c",selected_c);sym.getSymbol("Answer_C").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_C").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_c")==true)
{sym.getSymbol("Answer_C").stop("Down");}
else
{sym.getSymbol("Answer_C").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_C_Correct==true){EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_C}","touchend",function(sym,e){var answer_C_Correct=sym.getVariable("answer_C_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_c")!=undefined)
{var selected_c=sym.getVariable("selected_c");}
else
{var selected_c=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_c==false)
{selected_c=true;sym.getSymbol("Answer_C").stop("Down");}
else if(selected_c==true)
{selected_c=false;}
sym.setVariable("selected_c",selected_c);sym.getSymbol("Answer_C").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_C").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_c")==true)
{sym.getSymbol("Answer_C").stop("Down");}
else
{sym.getSymbol("Answer_C").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_C_Correct==true){EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_D}","mouseup",function(sym,e){var answer_D_Correct=sym.getVariable("answer_D_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_d")!=undefined)
{var selected_d=sym.getVariable("selected_d");}
else
{var selected_d=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_d==false)
{selected_d=true;sym.getSymbol("Answer_D").stop("Down");}
else if(selected_d==true)
{selected_d=false;}
sym.setVariable("selected_d",selected_d);sym.getSymbol("Answer_D").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_D").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_d")==true)
{sym.getSymbol("Answer_D").stop("Down");}
else
{sym.getSymbol("Answer_D").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_D_Correct==true)
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");;}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_D}","touchend",function(sym,e){var answer_D_Correct=sym.getVariable("answer_D_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_d")!=undefined)
{var selected_d=sym.getVariable("selected_d");}
else
{var selected_d=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_d==false)
{selected_d=true;sym.getSymbol("Answer_D").stop("Down");}
else if(selected_d==true)
{selected_d=false;}
sym.setVariable("selected_d",selected_d);sym.getSymbol("Answer_D").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_D").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_d")==true)
{sym.getSymbol("Answer_D").stop("Down");}
else
{sym.getSymbol("Answer_D").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_D_Correct==true)
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");;}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Continue_BTN}","mouseup",function(sym,e){var questionCtr=sym.getParentSymbol().getVariable("questionCtr");sym.getParentSymbol().stop("Game_Board");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Card").stop("Disabled");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Card").$("cursor").hide();sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Card").$("Card_Trigger").hide();sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Dice").stop("Up");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Dice").$("Cursor").show();sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Dice").$("Dice_Trigger").show();EC.Sound.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Continue_BTN}","touchend",function(sym,e){var questionCtr=sym.getParentSymbol().getVariable("questionCtr");sym.getParentSymbol().stop("Game_Board");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Card").stop("Disabled");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Card").$("cursor").hide();sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Card").$("Card_Trigger").hide();sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Dice").stop("Up");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Dice").$("Cursor").show();sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Dice").$("Dice_Trigger").show();EC.Sound.stop();});
//Edge binding end
Symbol.bindSymbolAction(compId,symbolName,"creationComplete",function(sym,e){sym.setVariable("multipleAnswers",false);sym.setVariable("answer_A_Correct",false);sym.setVariable("answer_B_Correct",true);sym.setVariable("answer_C_Correct",false);sym.setVariable("answer_D_Correct",false);var numOfDistractors=4;sym.setVariable("numOfDistractors",4);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){var numOfDistractors=sym.getVariable("numOfDistractors");sym.setVariable("selected_a",false);sym.setVariable("selected_b",false);sym.setVariable("selected_c",false);sym.setVariable("selected_d",false);if(numOfDistractors==1)
{sym.$("Answer_B").hide();sym.$("Answer_C").hide();sym.$("Answer_D").hide();}
else if(numOfDistractors==2)
{sym.$("Answer_C").hide();sym.$("Answer_D").hide();}
else if(numOfDistractors==3)
{sym.$("Answer_D").hide();}
if(sym.getVariable("multipleAnswers")==true)
{sym.$("_Submit_Button").show();}
else
{sym.$("_Submit_Button").hide();}
sym.getSymbol("Answer_A").stop("Up");sym.getSymbol("Answer_B").stop("Up");sym.getSymbol("Answer_C").stop("Up");sym.getSymbol("Answer_D").stop("Up");sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${__Submit_Button}","mouseup",function(sym,e){var selected_a=sym.getVariable("selected_a");var selected_b=sym.getVariable("selected_b");var selected_c=sym.getVariable("selected_c");var selected_d=sym.getVariable("selected_d");var answer_A_Correct=sym.getVariable("answer_A_Correct");var answer_B_Correct=sym.getVariable("answer_B_Correct");var answer_C_Correct=sym.getVariable("answer_C_Correct");var answer_D_Correct=sym.getVariable("answer_D_Correct");if((selected_a==answer_A_Correct)&&(selected_b==answer_B_Correct)&&(selected_c==answer_C_Correct)&&(selected_d==answer_D_Correct))
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}
sym.$("_Submit_Button").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${__Submit_Button}","touchend",function(sym,e){var selected_a=sym.getVariable("selected_a");var selected_b=sym.getVariable("selected_b");var selected_c=sym.getVariable("selected_c");var selected_d=sym.getVariable("selected_d");var answer_A_Correct=sym.getVariable("answer_A_Correct");var answer_B_Correct=sym.getVariable("answer_B_Correct");var answer_C_Correct=sym.getVariable("answer_C_Correct");var answer_D_Correct=sym.getVariable("answer_D_Correct");if((selected_a==answer_A_Correct)&&(selected_b==answer_B_Correct)&&(selected_c==answer_C_Correct)&&(selected_d==answer_D_Correct))
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}
sym.$("_Submit_Button").hide();});
//Edge binding end
})("Question_13_Choices");
//Edge symbol end:'Question_13_Choices'

//=========================================================

//Edge symbol: 'Question_14_Content'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Answer_A}","mouseup",function(sym,e){var answer_A_Correct=sym.getVariable("answer_A_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_a")!=undefined)
{var selected_a=sym.getVariable("selected_a");}
else
{var selected_a=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_a==false)
{selected_a=true;sym.getSymbol("Answer_A").stop("Down");}
else if(selected_a==true)
{selected_a=false;}
sym.setVariable("selected_a",selected_a);sym.getSymbol("Answer_A").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_A").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_a")==true)
{sym.getSymbol("Answer_A").stop("Down");}
else
{sym.getSymbol("Answer_A").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_A_Correct==true)
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_A}","touchend",function(sym,e){var answer_A_Correct=sym.getVariable("answer_A_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_a")!=undefined)
{var selected_a=sym.getVariable("selected_a");}
else
{var selected_a=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_a==false)
{selected_a=true;sym.getSymbol("Answer_A").stop("Down");}
else if(selected_a==true)
{selected_a=false;}
sym.setVariable("selected_a",selected_a);sym.getSymbol("Answer_A").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_A").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_a")==true)
{sym.getSymbol("Answer_A").stop("Down");}
else
{sym.getSymbol("Answer_A").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_A_Correct==true)
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_B}","mouseup",function(sym,e){var answer_B_Correct=sym.getVariable("answer_B_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_b")!=undefined)
{var selected_b=sym.getVariable("selected_b");}
else
{var selected_b=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_b==false)
{selected_b=true;sym.getSymbol("Answer_B").stop("Down");}
else if(selected_b==true)
{selected_b=false;}
sym.setVariable("selected_b",selected_b);sym.getSymbol("Answer_B").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_B").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_b")==true)
{sym.getSymbol("Answer_B").stop("Down");}
else
{sym.getSymbol("Answer_B").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_B_Correct==true)
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_B}","touchend",function(sym,e){var answer_B_Correct=sym.getVariable("answer_B_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_b")!=undefined)
{var selected_b=sym.getVariable("selected_b");}
else
{var selected_b=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_b==false)
{selected_b=true;sym.getSymbol("Answer_B").stop("Down");}
else if(selected_b==true)
{selected_b=false;}
sym.setVariable("selected_b",selected_b);sym.getSymbol("Answer_B").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_B").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_b")==true)
{sym.getSymbol("Answer_B").stop("Down");}
else
{sym.getSymbol("Answer_B").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_B_Correct==true)
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_C}","mouseup",function(sym,e){var answer_C_Correct=sym.getVariable("answer_C_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_c")!=undefined)
{var selected_c=sym.getVariable("selected_c");}
else
{var selected_c=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_c==false)
{selected_c=true;sym.getSymbol("Answer_C").stop("Down");}
else if(selected_c==true)
{selected_c=false;}
sym.setVariable("selected_c",selected_c);sym.getSymbol("Answer_C").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_C").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_c")==true)
{sym.getSymbol("Answer_C").stop("Down");}
else
{sym.getSymbol("Answer_C").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_C_Correct==true){EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_C}","touchend",function(sym,e){var answer_C_Correct=sym.getVariable("answer_C_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_c")!=undefined)
{var selected_c=sym.getVariable("selected_c");}
else
{var selected_c=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_c==false)
{selected_c=true;sym.getSymbol("Answer_C").stop("Down");}
else if(selected_c==true)
{selected_c=false;}
sym.setVariable("selected_c",selected_c);sym.getSymbol("Answer_C").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_C").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_c")==true)
{sym.getSymbol("Answer_C").stop("Down");}
else
{sym.getSymbol("Answer_C").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_C_Correct==true){EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_D}","mouseup",function(sym,e){var answer_D_Correct=sym.getVariable("answer_D_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_d")!=undefined)
{var selected_d=sym.getVariable("selected_d");}
else
{var selected_d=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_d==false)
{selected_d=true;sym.getSymbol("Answer_D").stop("Down");}
else if(selected_d==true)
{selected_d=false;}
sym.setVariable("selected_d",selected_d);sym.getSymbol("Answer_D").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_D").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_d")==true)
{sym.getSymbol("Answer_D").stop("Down");}
else
{sym.getSymbol("Answer_D").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_D_Correct==true)
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");;}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_D}","touchend",function(sym,e){var answer_D_Correct=sym.getVariable("answer_D_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_d")!=undefined)
{var selected_d=sym.getVariable("selected_d");}
else
{var selected_d=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_d==false)
{selected_d=true;sym.getSymbol("Answer_D").stop("Down");}
else if(selected_d==true)
{selected_d=false;}
sym.setVariable("selected_d",selected_d);sym.getSymbol("Answer_D").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_D").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_d")==true)
{sym.getSymbol("Answer_D").stop("Down");}
else
{sym.getSymbol("Answer_D").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_D_Correct==true)
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");;}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Continue_BTN}","mouseup",function(sym,e){var questionCtr=sym.getParentSymbol().getVariable("questionCtr");sym.getParentSymbol().stop("Game_Board");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Card").stop("Disabled");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Card").$("cursor").hide();sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Card").$("Card_Trigger").hide();sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Dice").stop("Up");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Dice").$("Cursor").show();sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Dice").$("Dice_Trigger").show();EC.Sound.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Continue_BTN}","touchend",function(sym,e){var questionCtr=sym.getParentSymbol().getVariable("questionCtr");sym.getParentSymbol().stop("Game_Board");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Card").stop("Disabled");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Card").$("cursor").hide();sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Card").$("Card_Trigger").hide();sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Dice").stop("Up");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Dice").$("Cursor").show();sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Dice").$("Dice_Trigger").show();EC.Sound.stop();});
//Edge binding end
Symbol.bindSymbolAction(compId,symbolName,"creationComplete",function(sym,e){sym.setVariable("multipleAnswers",false);sym.setVariable("answer_A_Correct",false);sym.setVariable("answer_B_Correct",false);sym.setVariable("answer_C_Correct",true);sym.setVariable("answer_D_Correct",false);sym.setVariable("numOfDistractors",4);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){var numOfDistractors=sym.getVariable("numOfDistractors");sym.setVariable("selected_a",false);sym.setVariable("selected_b",false);sym.setVariable("selected_c",false);sym.setVariable("selected_d",false);if(numOfDistractors==1)
{sym.$("Answer_B").hide();sym.$("Answer_C").hide();sym.$("Answer_D").hide();}
else if(numOfDistractors==2)
{sym.$("Answer_C").hide();sym.$("Answer_D").hide();}
else if(numOfDistractors==3)
{sym.$("Answer_D").hide();}
if(sym.getVariable("multipleAnswers")==true)
{sym.$("_Submit_Button").show();}
else
{sym.$("_Submit_Button").hide();}
sym.getSymbol("Answer_A").stop("Up");sym.getSymbol("Answer_B").stop("Up");sym.getSymbol("Answer_C").stop("Up");sym.getSymbol("Answer_D").stop("Up");sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${__Submit_Button}","mouseup",function(sym,e){var selected_a=sym.getVariable("selected_a");var selected_b=sym.getVariable("selected_b");var selected_c=sym.getVariable("selected_c");var selected_d=sym.getVariable("selected_d");var answer_A_Correct=sym.getVariable("answer_A_Correct");var answer_B_Correct=sym.getVariable("answer_B_Correct");var answer_C_Correct=sym.getVariable("answer_C_Correct");var answer_D_Correct=sym.getVariable("answer_D_Correct");if((selected_a==answer_A_Correct)&&(selected_b==answer_B_Correct)&&(selected_c==answer_C_Correct)&&(selected_d==answer_D_Correct))
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}
sym.$("_Submit_Button").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${__Submit_Button}","touchend",function(sym,e){var selected_a=sym.getVariable("selected_a");var selected_b=sym.getVariable("selected_b");var selected_c=sym.getVariable("selected_c");var selected_d=sym.getVariable("selected_d");var answer_A_Correct=sym.getVariable("answer_A_Correct");var answer_B_Correct=sym.getVariable("answer_B_Correct");var answer_C_Correct=sym.getVariable("answer_C_Correct");var answer_D_Correct=sym.getVariable("answer_D_Correct");if((selected_a==answer_A_Correct)&&(selected_b==answer_B_Correct)&&(selected_c==answer_C_Correct)&&(selected_d==answer_D_Correct))
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}
sym.$("_Submit_Button").hide();});
//Edge binding end
})("Question_14_Choices");
//Edge symbol end:'Question_14_Choices'

//=========================================================

//Edge symbol: 'Question_15_Content'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Answer_A}","mouseup",function(sym,e){var answer_A_Correct=sym.getVariable("answer_A_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_a")!=undefined)
{var selected_a=sym.getVariable("selected_a");}
else
{var selected_a=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_a==false)
{selected_a=true;sym.getSymbol("Answer_A").stop("Down");}
else if(selected_a==true)
{selected_a=false;}
sym.setVariable("selected_a",selected_a);sym.getSymbol("Answer_A").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_A").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_a")==true)
{sym.getSymbol("Answer_A").stop("Down");}
else
{sym.getSymbol("Answer_A").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_A_Correct==true)
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_A}","touchend",function(sym,e){var answer_A_Correct=sym.getVariable("answer_A_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_a")!=undefined)
{var selected_a=sym.getVariable("selected_a");}
else
{var selected_a=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_a==false)
{selected_a=true;sym.getSymbol("Answer_A").stop("Down");}
else if(selected_a==true)
{selected_a=false;}
sym.setVariable("selected_a",selected_a);sym.getSymbol("Answer_A").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_A").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_a")==true)
{sym.getSymbol("Answer_A").stop("Down");}
else
{sym.getSymbol("Answer_A").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_A_Correct==true)
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_B}","mouseup",function(sym,e){var answer_B_Correct=sym.getVariable("answer_B_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_b")!=undefined)
{var selected_b=sym.getVariable("selected_b");}
else
{var selected_b=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_b==false)
{selected_b=true;sym.getSymbol("Answer_B").stop("Down");}
else if(selected_b==true)
{selected_b=false;}
sym.setVariable("selected_b",selected_b);sym.getSymbol("Answer_B").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_B").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_b")==true)
{sym.getSymbol("Answer_B").stop("Down");}
else
{sym.getSymbol("Answer_B").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_B_Correct==true)
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_B}","touchend",function(sym,e){var answer_B_Correct=sym.getVariable("answer_B_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_b")!=undefined)
{var selected_b=sym.getVariable("selected_b");}
else
{var selected_b=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_b==false)
{selected_b=true;sym.getSymbol("Answer_B").stop("Down");}
else if(selected_b==true)
{selected_b=false;}
sym.setVariable("selected_b",selected_b);sym.getSymbol("Answer_B").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_B").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_b")==true)
{sym.getSymbol("Answer_B").stop("Down");}
else
{sym.getSymbol("Answer_B").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_B_Correct==true)
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_C}","mouseup",function(sym,e){var answer_C_Correct=sym.getVariable("answer_C_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_c")!=undefined)
{var selected_c=sym.getVariable("selected_c");}
else
{var selected_c=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_c==false)
{selected_c=true;sym.getSymbol("Answer_C").stop("Down");}
else if(selected_c==true)
{selected_c=false;}
sym.setVariable("selected_c",selected_c);sym.getSymbol("Answer_C").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_C").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_c")==true)
{sym.getSymbol("Answer_C").stop("Down");}
else
{sym.getSymbol("Answer_C").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_C_Correct==true){EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_C}","touchend",function(sym,e){var answer_C_Correct=sym.getVariable("answer_C_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_c")!=undefined)
{var selected_c=sym.getVariable("selected_c");}
else
{var selected_c=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_c==false)
{selected_c=true;sym.getSymbol("Answer_C").stop("Down");}
else if(selected_c==true)
{selected_c=false;}
sym.setVariable("selected_c",selected_c);sym.getSymbol("Answer_C").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_C").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_c")==true)
{sym.getSymbol("Answer_C").stop("Down");}
else
{sym.getSymbol("Answer_C").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_C_Correct==true){EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_D}","mouseup",function(sym,e){var answer_D_Correct=sym.getVariable("answer_D_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_d")!=undefined)
{var selected_d=sym.getVariable("selected_d");}
else
{var selected_d=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_d==false)
{selected_d=true;sym.getSymbol("Answer_D").stop("Down");}
else if(selected_d==true)
{selected_d=false;}
sym.setVariable("selected_d",selected_d);sym.getSymbol("Answer_D").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_D").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_d")==true)
{sym.getSymbol("Answer_D").stop("Down");}
else
{sym.getSymbol("Answer_D").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_D_Correct==true)
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");;}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_D}","touchend",function(sym,e){var answer_D_Correct=sym.getVariable("answer_D_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_d")!=undefined)
{var selected_d=sym.getVariable("selected_d");}
else
{var selected_d=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_d==false)
{selected_d=true;sym.getSymbol("Answer_D").stop("Down");}
else if(selected_d==true)
{selected_d=false;}
sym.setVariable("selected_d",selected_d);sym.getSymbol("Answer_D").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_D").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_d")==true)
{sym.getSymbol("Answer_D").stop("Down");}
else
{sym.getSymbol("Answer_D").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_D_Correct==true)
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");;}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Continue_BTN}","mouseup",function(sym,e){var questionCtr=sym.getParentSymbol().getVariable("questionCtr");sym.getParentSymbol().stop("Game_Board");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Card").stop("Disabled");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Card").$("cursor").hide();sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Card").$("Card_Trigger").hide();sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Dice").stop("Up");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Dice").$("Cursor").show();sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Dice").$("Dice_Trigger").show();EC.Sound.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Continue_BTN}","touchend",function(sym,e){var questionCtr=sym.getParentSymbol().getVariable("questionCtr");sym.getParentSymbol().stop("Game_Board");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Card").stop("Disabled");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Card").$("cursor").hide();sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Card").$("Card_Trigger").hide();sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Dice").stop("Up");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Dice").$("Cursor").show();sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Dice").$("Dice_Trigger").show();EC.Sound.stop();});
//Edge binding end
Symbol.bindSymbolAction(compId,symbolName,"creationComplete",function(sym,e){sym.setVariable("multipleAnswers",false);sym.setVariable("answer_A_Correct",false);sym.setVariable("answer_B_Correct",false);sym.setVariable("answer_C_Correct",false);sym.setVariable("answer_D_Correct",true);sym.setVariable("numOfDistractors",4);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){var numOfDistractors=sym.getVariable("numOfDistractors");sym.setVariable("selected_a",false);sym.setVariable("selected_b",false);sym.setVariable("selected_c",false);sym.setVariable("selected_d",false);if(numOfDistractors==1)
{sym.$("Answer_B").hide();sym.$("Answer_C").hide();sym.$("Answer_D").hide();}
else if(numOfDistractors==2)
{sym.$("Answer_C").hide();sym.$("Answer_D").hide();}
else if(numOfDistractors==3)
{sym.$("Answer_D").hide();}
if(sym.getVariable("multipleAnswers")==true)
{sym.$("_Submit_Button").show();}
else
{sym.$("_Submit_Button").hide();}
sym.getSymbol("Answer_A").stop("Up");sym.getSymbol("Answer_B").stop("Up");sym.getSymbol("Answer_C").stop("Up");sym.getSymbol("Answer_D").stop("Up");sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${__Submit_Button}","mouseup",function(sym,e){var selected_a=sym.getVariable("selected_a");var selected_b=sym.getVariable("selected_b");var selected_c=sym.getVariable("selected_c");var selected_d=sym.getVariable("selected_d");var answer_A_Correct=sym.getVariable("answer_A_Correct");var answer_B_Correct=sym.getVariable("answer_B_Correct");var answer_C_Correct=sym.getVariable("answer_C_Correct");var answer_D_Correct=sym.getVariable("answer_D_Correct");if((selected_a==answer_A_Correct)&&(selected_b==answer_B_Correct)&&(selected_c==answer_C_Correct)&&(selected_d==answer_D_Correct))
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}
sym.$("_Submit_Button").hide();});
//Edge binding end
})("Question_15_Choices");
//Edge symbol end:'Question_15_Choices'

//=========================================================

//Edge symbol: 'Conlusion_Panel'
(function(symbolName){})("Conlusion_Text");
//Edge symbol end:'Conlusion_Text'

//=========================================================

//Edge symbol: '_Continue_Button_1'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_submit_trigger}","mouseover",function(sym,e){sym.stop("Hover");EC.Sound.play("hover");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_submit_trigger}","mouseup",function(sym,e){sym.stop("Hover");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_submit_trigger}","mouseout",function(sym,e){sym.stop("Normal");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_submit_trigger}","mousedown",function(sym,e){sym.stop("Hover");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_submit_trigger}","touchstart",function(sym,e){sym.stop("Down");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_submit_trigger}","touchend",function(sym,e){sym.stop("Normal");});
//Edge binding end
})("_Submit_Button");
//Edge symbol end:'_Submit_Button'

//=========================================================

//Edge symbol: 'Top_Bar'
(function(symbolName){})("Top_Bar");
//Edge symbol end:'Top_Bar'

//=========================================================

//Edge symbol: '_Question_02_Answer_A_1'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseover",function(sym,e){EC.Sound.play("hover");sym.stop("Over");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mousedown",function(sym,e){sym.stop("Down");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseup",function(sym,e){sym.stop("Over");EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseout",function(sym,e){sym.stop("Up");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchend",function(sym,e){EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchstart",function(sym,e){sym.stop("Down");});
//Edge binding end
})("_Question_01_Answer_A");
//Edge symbol end:'_Question_01_Answer_A'

//=========================================================

//Edge symbol: '_Question_02_Answer_B_1'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseover",function(sym,e){EC.Sound.play("hover");sym.stop("Over");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mousedown",function(sym,e){sym.stop("Down");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseup",function(sym,e){sym.stop("Over");EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseout",function(sym,e){sym.stop("Up");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchend",function(sym,e){EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchstart",function(sym,e){sym.stop("Down");});
//Edge binding end
})("_Question_01_Answer_B");
//Edge symbol end:'_Question_01_Answer_B'

//=========================================================

//Edge symbol: '_Question_02_Answer_C_1'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseover",function(sym,e){EC.Sound.play("hover");sym.stop("Over");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mousedown",function(sym,e){sym.stop("Down");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseup",function(sym,e){sym.stop("Over");EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseout",function(sym,e){sym.stop("Up");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchend",function(sym,e){EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchstart",function(sym,e){sym.stop("Down");});
//Edge binding end
})("_Question_01_Answer_C");
//Edge symbol end:'_Question_01_Answer_C'

//=========================================================

//Edge symbol: '_Question_02_Answer_D_1'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseover",function(sym,e){EC.Sound.play("hover");sym.stop("Over");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mousedown",function(sym,e){sym.stop("Down");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseup",function(sym,e){sym.stop("Over");EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseout",function(sym,e){sym.stop("Up");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchend",function(sym,e){EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchstart",function(sym,e){sym.stop("Down");});
//Edge binding end
})("_Question_01_Answer_D");
//Edge symbol end:'_Question_01_Answer_D'

//=========================================================

//Edge symbol: 'Question_01_Choices'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){var numOfDistractors=sym.getVariable("numOfDistractors");sym.setVariable("selected_a",false);sym.setVariable("selected_b",false);sym.setVariable("selected_c",false);sym.setVariable("selected_d",false);if(numOfDistractors==1)
{sym.$("Answer_B").hide();sym.$("Answer_C").hide();sym.$("Answer_D").hide();}
else if(numOfDistractors==2)
{sym.$("Answer_C").hide();sym.$("Answer_D").hide();}
else if(numOfDistractors==3)
{sym.$("Answer_D").hide();}
if(sym.getVariable("multipleAnswers")==true)
{sym.$("_Submit_Button").show();}
else
{sym.$("_Submit_Button").hide();}
sym.getSymbol("Answer_A").stop("Up");sym.getSymbol("Answer_B").stop("Up");sym.getSymbol("Answer_C").stop("Up");sym.getSymbol("Answer_D").stop("Up");sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_B}","mouseup",function(sym,e){var answer_B_Correct=sym.getVariable("answer_B_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_b")!=undefined)
{var selected_b=sym.getVariable("selected_b");}
else
{var selected_b=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_b==false)
{selected_b=true;sym.getSymbol("Answer_B").stop("Down");}
else if(selected_b==true)
{selected_b=false;}
sym.setVariable("selected_b",selected_b);sym.getSymbol("Answer_B").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_B").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_b")==true)
{sym.getSymbol("Answer_B").stop("Down");}
else
{sym.getSymbol("Answer_B").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_B_Correct==true)
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_B}","touchend",function(sym,e){var answer_B_Correct=sym.getVariable("answer_B_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_b")!=undefined)
{var selected_b=sym.getVariable("selected_b");}
else
{var selected_b=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_b==false)
{selected_b=true;sym.getSymbol("Answer_B").stop("Down");}
else if(selected_b==true)
{selected_b=false;}
sym.setVariable("selected_b",selected_b);sym.getSymbol("Answer_B").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_B").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_b")==true)
{sym.getSymbol("Answer_B").stop("Down");}
else
{sym.getSymbol("Answer_B").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_B_Correct==true)
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}}});
//Edge binding end
Symbol.bindSymbolAction(compId,symbolName,"creationComplete",function(sym,e){sym.setVariable("multipleAnswers",false);sym.setVariable("answer_A_Correct",false);sym.setVariable("answer_B_Correct",true);sym.setVariable("answer_C_Correct",false);sym.setVariable("answer_D_Correct",false);sym.setVariable("numOfDistractors",4);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_A}","mouseup",function(sym,e){var answer_A_Correct=sym.getVariable("answer_A_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_a")!=undefined)
{var selected_a=sym.getVariable("selected_a");}
else
{var selected_a=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_a==false)
{selected_a=true;sym.getSymbol("Answer_A").stop("Down");}
else if(selected_a==true)
{selected_a=false;}
sym.setVariable("selected_a",selected_a);sym.getSymbol("Answer_A").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_A").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_a")==true)
{sym.getSymbol("Answer_A").stop("Down");}
else
{sym.getSymbol("Answer_A").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_A_Correct==true)
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_A}","touchend",function(sym,e){var answer_A_Correct=sym.getVariable("answer_A_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_a")!=undefined)
{var selected_a=sym.getVariable("selected_a");}
else
{var selected_a=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_a==false)
{selected_a=true;sym.getSymbol("Answer_A").stop("Down");}
else if(selected_a==true)
{selected_a=false;}
sym.setVariable("selected_a",selected_a);sym.getSymbol("Answer_A").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_A").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_a")==true)
{sym.getSymbol("Answer_A").stop("Down");}
else
{sym.getSymbol("Answer_A").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_A_Correct==true)
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_C}","mouseup",function(sym,e){var answer_C_Correct=sym.getVariable("answer_C_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_c")!=undefined)
{var selected_c=sym.getVariable("selected_c");}
else
{var selected_c=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_c==false)
{selected_c=true;sym.getSymbol("Answer_C").stop("Down");}
else if(selected_c==true)
{selected_c=false;}
sym.setVariable("selected_c",selected_c);sym.getSymbol("Answer_C").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_C").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_c")==true)
{sym.getSymbol("Answer_C").stop("Down");}
else
{sym.getSymbol("Answer_C").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_C_Correct==true){EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_C}","touchend",function(sym,e){var answer_C_Correct=sym.getVariable("answer_C_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_c")!=undefined)
{var selected_c=sym.getVariable("selected_c");}
else
{var selected_c=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_c==false)
{selected_c=true;sym.getSymbol("Answer_C").stop("Down");}
else if(selected_c==true)
{selected_c=false;}
sym.setVariable("selected_c",selected_c);sym.getSymbol("Answer_C").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_C").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_c")==true)
{sym.getSymbol("Answer_C").stop("Down");}
else
{sym.getSymbol("Answer_C").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_C_Correct==true){EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_D}","mouseup",function(sym,e){var answer_D_Correct=sym.getVariable("answer_D_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_d")!=undefined)
{var selected_d=sym.getVariable("selected_d");}
else
{var selected_d=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_d==false)
{selected_d=true;sym.getSymbol("Answer_D").stop("Down");}
else if(selected_d==true)
{selected_d=false;}
sym.setVariable("selected_d",selected_d);sym.getSymbol("Answer_D").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_D").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_d")==true)
{sym.getSymbol("Answer_D").stop("Down");}
else
{sym.getSymbol("Answer_D").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_D_Correct==true)
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");;}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_D}","touchend",function(sym,e){var answer_D_Correct=sym.getVariable("answer_D_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_d")!=undefined)
{var selected_d=sym.getVariable("selected_d");}
else
{var selected_d=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_d==false)
{selected_d=true;sym.getSymbol("Answer_D").stop("Down");}
else if(selected_d==true)
{selected_d=false;}
sym.setVariable("selected_d",selected_d);sym.getSymbol("Answer_D").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_D").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_d")==true)
{sym.getSymbol("Answer_D").stop("Down");}
else
{sym.getSymbol("Answer_D").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_D_Correct==true)
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");;}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${__Submit_Button}","mouseup",function(sym,e){var selected_a=sym.getVariable("selected_a");var selected_b=sym.getVariable("selected_b");var selected_c=sym.getVariable("selected_c");var selected_d=sym.getVariable("selected_d");var answer_A_Correct=sym.getVariable("answer_A_Correct");var answer_B_Correct=sym.getVariable("answer_B_Correct");var answer_C_Correct=sym.getVariable("answer_C_Correct");var answer_D_Correct=sym.getVariable("answer_D_Correct");if((selected_a==answer_A_Correct)&&(selected_b==answer_B_Correct)&&(selected_c==answer_C_Correct)&&(selected_d==answer_D_Correct))
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}
sym.$("_Submit_Button").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${__Submit_Button}","touchend",function(sym,e){var selected_a=sym.getVariable("selected_a");var selected_b=sym.getVariable("selected_b");var selected_c=sym.getVariable("selected_c");var selected_d=sym.getVariable("selected_d");var answer_A_Correct=sym.getVariable("answer_A_Correct");var answer_B_Correct=sym.getVariable("answer_B_Correct");var answer_C_Correct=sym.getVariable("answer_C_Correct");var answer_D_Correct=sym.getVariable("answer_D_Correct");if((selected_a==answer_A_Correct)&&(selected_b==answer_B_Correct)&&(selected_c==answer_C_Correct)&&(selected_d==answer_D_Correct))
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}
sym.$("_Submit_Button").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Continue_BTN}","mouseup",function(sym,e){var questionCtr=sym.getParentSymbol().getVariable("questionCtr");sym.getParentSymbol().stop("Game_Board");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Card").stop("Disabled");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Card").$("cursor").hide();sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Card").$("Card_Trigger").hide();sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Dice").stop("Up");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Dice").$("Cursor").show();sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Dice").$("Dice_Trigger").show();EC.Sound.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Continue_BTN}","touchend",function(sym,e){var questionCtr=sym.getParentSymbol().getVariable("questionCtr");sym.getParentSymbol().stop("Game_Board");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Card").stop("Disabled");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Card").$("cursor").hide();sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Card").$("Card_Trigger").hide();sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Dice").stop("Up");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Dice").$("Cursor").show();sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Dice").$("Dice_Trigger").show();EC.Sound.stop();});
//Edge binding end
})("Question_01_Choices");
//Edge symbol end:'Question_01_Choices'

//=========================================================

//Edge symbol: '_avatar_1'
(function(symbolName){})("_avatar_1");
//Edge symbol end:'_avatar_1'

//=========================================================

//Edge symbol: '_avatar_2'
(function(symbolName){})("_avatar_2");
//Edge symbol end:'_avatar_2'

//=========================================================

//Edge symbol: '_Instruction_Background'
(function(symbolName){})("_Instruction_Background");
//Edge symbol end:'_Instruction_Background'

//=========================================================

//Edge symbol: '_avatar_4'
(function(symbolName){})("_avatar_4");
//Edge symbol end:'_avatar_4'

//=========================================================

//Edge symbol: '_avatar_3'
(function(symbolName){})("_avatar_3");
//Edge symbol end:'_avatar_3'

//=========================================================

//Edge symbol: 'Instruction_Text'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_avatar_1}","mouseup",function(sym,e){sym.getParentSymbol().stop("Game_Board");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Avatar_Object").stop("Avatar 3");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_avatar_1}","touchend",function(sym,e){sym.getParentSymbol().stop("Game_Board");sym.getParentSymbol().getSymbol("Game_Board").stop("Start");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Avatar_Object").stop("Avatar 3");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_avatar_1}","mouseover",function(sym,e){EC.Sound.play("hover");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_avatar_2}","mouseup",function(sym,e){sym.getParentSymbol().stop("Game_Board");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Avatar_Object").stop("Avatar 1");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_avatar_2}","touchend",function(sym,e){sym.getParentSymbol().stop("Game_Board");sym.getParentSymbol().getSymbol("Game_Board").stop("Start");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Avatar_Object").stop("Avatar 1");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_avatar_2}","mouseover",function(sym,e){EC.Sound.play("hover");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_avatar_3}","mouseup",function(sym,e){sym.getParentSymbol().stop("Game_Board");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Avatar_Object").stop("Avatar 2");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_avatar_3}","touchend",function(sym,e){sym.getParentSymbol().stop("Game_Board");sym.getParentSymbol().getSymbol("Game_Board").stop("Start");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Avatar_Object").stop("Avatar 2");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_avatar_3}","mouseover",function(sym,e){EC.Sound.play("hover");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_avatar_4}","mouseup",function(sym,e){sym.getParentSymbol().stop("Game_Board");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Avatar_Object").stop("Avatar 4");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_avatar_4}","touchend",function(sym,e){sym.getParentSymbol().stop("Game_Board");sym.getParentSymbol().getSymbol("Game_Board").stop("Start");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Avatar_Object").stop("Avatar 4");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_avatar_4}","mouseover",function(sym,e){EC.Sound.play("hover");});
//Edge binding end
})("Instruction_Text");
//Edge symbol end:'Instruction_Text'

//=========================================================

//Edge symbol: 'Board_Box'
(function(symbolName){})("_Board_Box_100");
//Edge symbol end:'_Board_Box_100'

//=========================================================

//Edge symbol: '_dollar_sign'
(function(symbolName){})("_dollar_sign");
//Edge symbol end:'_dollar_sign'

//=========================================================

//Edge symbol: '_Board_Box_1'
(function(symbolName){})("_Board_Box_300");
//Edge symbol end:'_Board_Box_300'

//=========================================================

//Edge symbol: 'Game_Board'
(function(symbolName){Symbol.bindTimelineAction(compId,symbolName,"Default Timeline","update",function(sym,e){var diceValue=sym.getParentSymbol().getVariable("diceValue");var stopPosition=sym.getParentSymbol().getVariable("stopPosition");var addScore=sym.getParentSymbol().getVariable("addScore");var arrQues=sym.getParentSymbol().getVariable("arrQues20");var questionCtr=sym.getParentSymbol().getVariable("questionCtr");var NumberOfQuestions=sym.getParentSymbol().getVariable("NumberOfQuestions");stopPosition+=diceValue*500;if(sym.getPosition()>stopPosition)
{sym.stop(stopPosition);sym.getSymbol("Card").$("Card_Trigger").show();sym.getSymbol("Card").$("cursor").show();sym.getParentSymbol().setVariable("stopPosition",stopPosition);if(questionCtr==NumberOfQuestions)
{sym.getParentSymbol().stop("Conclusion");}
var cur=sym.getPosition();if(cur==500||cur==3500||cur==5000||cur==6500||cur==8000||cur==9500||cur==12500||cur==14000||cur==15500||cur==17000||cur==18500||cur==20000||cur==23000)
{addScore=100;sym.getParentSymbol().setVariable("addScore",addScore);}
if(cur==1000||cur==2500||cur==4000||cur==8500||cur==10000||cur==13000||cur==14500||cur==17500||cur==19000||cur==20500||cur==22000)
{addScore=300;sym.getParentSymbol().setVariable("addScore",addScore);}
if(cur==1500||cur==3000||cur==4500||cur==6000||cur==7500||cur==9000||cur==10500||cur==12000||cur==13500||cur==15000||cur==16500||cur==19500||cur==21000||cur==22500||cur==24000)
{addScore=500;sym.getParentSymbol().setVariable("addScore",addScore);}
if(cur==5500||cur==11000||cur==18000||cur==21500||cur==23500)
{addScore=2;sym.getParentSymbol().setVariable("addScore",addScore);}
if(cur==2000||cur==7000||cur==11500||cur==16000)
{sym.$("Lose_Points").show();sym.getParentSymbol().setVariable("score",0);var score=sym.getParentSymbol().getVariable("score");sym.getParentSymbol().$("score_txt").html(score);arrQues.push(1);var isResetPoints=sym.getParentSymbol().getVariable("isResetPoints");isResetPoints=true;sym.getParentSymbol().setVariable("isResetPoints",isResetPoints);}}});
//Edge binding end
})("_Game_Board");
//Edge symbol end:'_Game_Board'

//=========================================================

//Edge symbol: '_Board_Box_1'
(function(symbolName){})("_Board_Box_500");
//Edge symbol end:'_Board_Box_500'

//=========================================================

//Edge symbol: '_Board_Box_1'
(function(symbolName){})("_Board_Box_X2");
//Edge symbol end:'_Board_Box_X2'

//=========================================================

//Edge symbol: '_Board_Box_X2_1'
(function(symbolName){})("_Board_Box_X");
//Edge symbol end:'_Board_Box_X'

//=========================================================

//Edge symbol: '_Avatar_Object'
(function(symbolName){})("_Avatar_Object");
//Edge symbol end:'_Avatar_Object'

//=========================================================

//Edge symbol: 'Board_Box'
(function(symbolName){})("_Board_Box");
//Edge symbol end:'_Board_Box'

//=========================================================

//Edge symbol: '_Board_Box_1'
(function(symbolName){})("_Board_Box_Finish");
//Edge symbol end:'_Board_Box_Finish'

//=========================================================

//Edge symbol: 'Dice'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Dice_Trigger}","mouseover",function(sym,e){EC.Sound.play("hover");sym.stop("Over");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Dice_Trigger}","mousedown",function(sym,e){sym.stop("Over");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Dice_Trigger}","mouseup",function(sym,e){sym.stop("Up");EC.Sound.play("click");var parentSym=sym.getParentSymbol().getParentSymbol();var arrQues20=parentSym.getVariable("arrQues20");var pickDiceNum=Math.floor(Math.random()*arrQues20.length);parentSym.setVariable("pickDiceNum",pickDiceNum);sym.getSymbol("Dice_Roll").play(0);sym.getSymbol("dice_dot").play("one");sym.$("Cursor").hide();sym.$("Dice_Trigger").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Dice_Trigger}","mouseout",function(sym,e){sym.stop("Up");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Dice_Trigger}","touchend",function(sym,e){sym.stop("Up");EC.Sound.play("click");var parentSym=sym.getParentSymbol().getParentSymbol();var arrQues20=parentSym.getVariable("arrQues20");var pickDiceNum=Math.floor(Math.random()*arrQues20.length);parentSym.setVariable("pickDiceNum",pickDiceNum);sym.getSymbol("Dice_Roll").play(0);sym.getSymbol("dice_dot").play("one");sym.$("Cursor").hide();sym.$("Dice_Trigger").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Dice_Trigger}","touchstart",function(sym,e){sym.stop("Over");});
//Edge binding end
})("_Dice");
//Edge symbol end:'_Dice'

//=========================================================

//Edge symbol: 'Dice_Bg'
(function(symbolName){})("_Dice_Bg");
//Edge symbol end:'_Dice_Bg'

//=========================================================

//Edge symbol: '_dice_dot'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){var diceValue=1;sym.getParentSymbol().getParentSymbol().getParentSymbol().setVariable("diceValue",diceValue);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",100,function(sym,e){var diceValue=2;sym.getParentSymbol().getParentSymbol().getParentSymbol().setVariable("diceValue",diceValue);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",205,function(sym,e){var diceValue=3
sym.getParentSymbol().getParentSymbol().getParentSymbol().setVariable("diceValue",diceValue);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",300,function(sym,e){var diceValue=4;sym.getParentSymbol().getParentSymbol().getParentSymbol().setVariable("diceValue",diceValue);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",380,function(sym,e){var diceValue=5;sym.getParentSymbol().getParentSymbol().getParentSymbol().setVariable("diceValue",diceValue);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",460,function(sym,e){var diceValue=6;sym.getParentSymbol().getParentSymbol().getParentSymbol().setVariable("diceValue",diceValue);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",540,function(sym,e){var parentSym=sym.getParentSymbol().getParentSymbol().getParentSymbol();var rollCtr=parentSym.getVariable("rollCtr");var arrQues20=parentSym.getVariable("arrQues20");var pickDiceNum=parentSym.getVariable("pickDiceNum");var interval=parentSym.getVariable("interval");var playCtrInterval=parentSym.getVariable("playCtrInterval");var isResetPoints=parentSym.getVariable("isResetPoints");var questionCtr=parentSym.getVariable("questionCtr");var NumberOfQuestions=parentSym.getVariable("NumberOfQuestions");rollCtr++;parentSym.setVariable("rollCtr",rollCtr);if(rollCtr==2)
{if(isResetPoints==true&&arrQues20[pickDiceNum]>1)
{sym.stop(""+(arrQues20[pickDiceNum]-1));isResetPoints=false;parentSym.setVariable("isResetPoints",isResetPoints);}
else
{if(questionCtr==NumberOfQuestions)
{sym.stop("1");}
else
{sym.stop(""+arrQues20[pickDiceNum]);}}
arrQues20.splice(pickDiceNum,1);parentSym.setVariable("arrQues20",arrQues20);sym.getParentSymbol().stop("Disabled");sym.getParentSymbol().getParentSymbol().getSymbol("Card").stop("Up");interval=self.setInterval(startInterval,1000);}
else
{sym.play(0);}
function startInterval()
{playCtrInterval++;if(playCtrInterval==1)
{sym.getParentSymbol().getParentSymbol().play(sym.getParentSymbol().getParentSymbol().getPosition());parentSym.setVariable("playCtrInterval",0);clear(interval);parentSym.setVariable("interval",interval);}}});
//Edge binding end
})("_dice_dot");
//Edge symbol end:'_dice_dot'

//=========================================================

//Edge symbol: '_Card'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Card_Trigger}","mouseover",function(sym,e){EC.Sound.play("hover");sym.stop("Over");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Card_Trigger}","mousedown",function(sym,e){sym.stop("Over");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Card_Trigger}","mouseup",function(sym,e){sym.stop("Up");EC.Sound.play("click");sym.getParentSymbol().getParentSymbol().$("Question_Counter").show();var NumberOfQuestions=sym.getParentSymbol().getParentSymbol().getVariable("NumberOfQuestions");var questionCtr=sym.getParentSymbol().getParentSymbol().getVariable("questionCtr");questionCtr++;sym.getParentSymbol().getParentSymbol().setVariable("questionCtr",questionCtr);sym.getParentSymbol().getParentSymbol().stop("Question "+questionCtr);sym.getParentSymbol().getParentSymbol().getSymbol("Question_"+questionCtr+"_Content").stop("Choices");sym.getParentSymbol().getParentSymbol().$("Question_Counter").html(questionCtr+" of "+NumberOfQuestions);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Card_Trigger}","mouseout",function(sym,e){sym.stop("Up");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Card_Trigger}","touchend",function(sym,e){sym.stop("Up");EC.Sound.play("click");sym.getParentSymbol().getParentSymbol().$("Question_Counter").show();var NumberOfQuestions=sym.getParentSymbol().getParentSymbol().getVariable("NumberOfQuestions");var questionCtr=sym.getParentSymbol().getParentSymbol().getVariable("questionCtr");questionCtr++;sym.getParentSymbol().getParentSymbol().setVariable("questionCtr",questionCtr);sym.getParentSymbol().getParentSymbol().stop("Question "+questionCtr);sym.getParentSymbol().getParentSymbol().getSymbol("Question_"+questionCtr+"_Content").stop("Choices");sym.getParentSymbol().getParentSymbol().$("Question_Counter").html(questionCtr+" of "+NumberOfQuestions);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Card_Trigger}","touchstart",function(sym,e){sym.stop("Over");});
//Edge binding end
})("_Card");
//Edge symbol end:'_Card'

//=========================================================

//Edge symbol: '_Cursor'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1000,function(sym,e){sym.play(0);});
//Edge binding end
})("_Cursor");
//Edge symbol end:'_Cursor'

//=========================================================

//Edge symbol: 'Dice_Roll'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",140,function(sym,e){var parentSym=sym.getParentSymbol().getParentSymbol().getParentSymbol();var rollCtr=parentSym.getVariable("rollCtr");if(rollCtr==2)
{sym.stop(0);parentSym.setVariable("rollCtr",0);}
else
{sym.play(0);}});
//Edge binding end
})("_Dice_Roll");
//Edge symbol end:'_Dice_Roll'

//=========================================================

//Edge symbol: '_cursor_2'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1000,function(sym,e){sym.play(0);});
//Edge binding end
})("_cursor_2");
//Edge symbol end:'_cursor_2'

//=========================================================

//Edge symbol: 'Question_1'
(function(symbolName){})("Question_16");
//Edge symbol end:'Question_16'

//=========================================================

//Edge symbol: 'Question_2'
(function(symbolName){})("Question_17");
//Edge symbol end:'Question_17'

//=========================================================

//Edge symbol: 'Question_3'
(function(symbolName){})("Question_18");
//Edge symbol end:'Question_18'

//=========================================================

//Edge symbol: 'Question_4'
(function(symbolName){})("Question_19");
//Edge symbol end:'Question_19'

//=========================================================

//Edge symbol: 'Question_5'
(function(symbolName){})("Question_20");
//Edge symbol end:'Question_20'

//=========================================================

//Edge symbol: 'Question_15_Choices_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){var numOfDistractors=sym.getVariable("numOfDistractors");sym.setVariable("selected_a",false);sym.setVariable("selected_b",false);sym.setVariable("selected_c",false);sym.setVariable("selected_d",false);if(numOfDistractors==1)
{sym.$("Answer_B").hide();sym.$("Answer_C").hide();sym.$("Answer_D").hide();}
else if(numOfDistractors==2)
{sym.$("Answer_C").hide();sym.$("Answer_D").hide();}
else if(numOfDistractors==3)
{sym.$("Answer_D").hide();}
if(sym.getVariable("multipleAnswers")==true)
{sym.$("_Submit_Button").show();}
else
{sym.$("_Submit_Button").hide();}
sym.getSymbol("Answer_A").stop("Up");sym.getSymbol("Answer_B").stop("Up");sym.getSymbol("Answer_C").stop("Up");sym.getSymbol("Answer_D").stop("Up");sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Continue_BTN}","mouseup",function(sym,e){var questionCtr=sym.getParentSymbol().getVariable("questionCtr");sym.getParentSymbol().stop("Game_Board");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Card").stop("Disabled");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Card").$("cursor").hide();sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Card").$("Card_Trigger").hide();sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Dice").stop("Up");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Dice").$("Cursor").show();sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Dice").$("Dice_Trigger").show();EC.Sound.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Continue_BTN}","touchend",function(sym,e){var questionCtr=sym.getParentSymbol().getVariable("questionCtr");sym.getParentSymbol().stop("Game_Board");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Card").stop("Disabled");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Card").$("cursor").hide();sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Card").$("Card_Trigger").hide();sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Dice").stop("Up");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Dice").$("Cursor").show();sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Dice").$("Dice_Trigger").show();EC.Sound.stop();});
//Edge binding end
Symbol.bindSymbolAction(compId,symbolName,"creationComplete",function(sym,e){sym.setVariable("multipleAnswers",false);sym.setVariable("answer_A_Correct",false);sym.setVariable("answer_B_Correct",false);sym.setVariable("answer_C_Correct",false);sym.setVariable("answer_D_Correct",true);sym.setVariable("numOfDistractors",4);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${__Submit_Button}","mouseup",function(sym,e){var selected_a=sym.getVariable("selected_a");var selected_b=sym.getVariable("selected_b");var selected_c=sym.getVariable("selected_c");var selected_d=sym.getVariable("selected_d");var answer_A_Correct=sym.getVariable("answer_A_Correct");var answer_B_Correct=sym.getVariable("answer_B_Correct");var answer_C_Correct=sym.getVariable("answer_C_Correct");var answer_D_Correct=sym.getVariable("answer_D_Correct");if((selected_a==answer_A_Correct)&&(selected_b==answer_B_Correct)&&(selected_c==answer_C_Correct)&&(selected_d==answer_D_Correct))
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}
sym.$("_Submit_Button").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_A}","mouseup",function(sym,e){var answer_A_Correct=sym.getVariable("answer_A_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_a")!=undefined)
{var selected_a=sym.getVariable("selected_a");}
else
{var selected_a=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_a==false)
{selected_a=true;sym.getSymbol("Answer_A").stop("Down");}
else if(selected_a==true)
{selected_a=false;}
sym.setVariable("selected_a",selected_a);sym.getSymbol("Answer_A").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_A").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_a")==true)
{sym.getSymbol("Answer_A").stop("Down");}
else
{sym.getSymbol("Answer_A").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_A_Correct==true)
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_A}","touchend",function(sym,e){var answer_A_Correct=sym.getVariable("answer_A_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_a")!=undefined)
{var selected_a=sym.getVariable("selected_a");}
else
{var selected_a=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_a==false)
{selected_a=true;sym.getSymbol("Answer_A").stop("Down");}
else if(selected_a==true)
{selected_a=false;}
sym.setVariable("selected_a",selected_a);sym.getSymbol("Answer_A").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_A").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_a")==true)
{sym.getSymbol("Answer_A").stop("Down");}
else
{sym.getSymbol("Answer_A").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_A_Correct==true)
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_B}","mouseup",function(sym,e){var answer_B_Correct=sym.getVariable("answer_B_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_b")!=undefined)
{var selected_b=sym.getVariable("selected_b");}
else
{var selected_b=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_b==false)
{selected_b=true;sym.getSymbol("Answer_B").stop("Down");}
else if(selected_b==true)
{selected_b=false;}
sym.setVariable("selected_b",selected_b);sym.getSymbol("Answer_B").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_B").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_b")==true)
{sym.getSymbol("Answer_B").stop("Down");}
else
{sym.getSymbol("Answer_B").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_B_Correct==true)
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_B}","touchend",function(sym,e){var answer_B_Correct=sym.getVariable("answer_B_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_b")!=undefined)
{var selected_b=sym.getVariable("selected_b");}
else
{var selected_b=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_b==false)
{selected_b=true;sym.getSymbol("Answer_B").stop("Down");}
else if(selected_b==true)
{selected_b=false;}
sym.setVariable("selected_b",selected_b);sym.getSymbol("Answer_B").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_B").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_b")==true)
{sym.getSymbol("Answer_B").stop("Down");}
else
{sym.getSymbol("Answer_B").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_B_Correct==true)
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_C}","mouseup",function(sym,e){var answer_C_Correct=sym.getVariable("answer_C_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_c")!=undefined)
{var selected_c=sym.getVariable("selected_c");}
else
{var selected_c=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_c==false)
{selected_c=true;sym.getSymbol("Answer_C").stop("Down");}
else if(selected_c==true)
{selected_c=false;}
sym.setVariable("selected_c",selected_c);sym.getSymbol("Answer_C").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_C").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_c")==true)
{sym.getSymbol("Answer_C").stop("Down");}
else
{sym.getSymbol("Answer_C").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_C_Correct==true){EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_C}","touchend",function(sym,e){var answer_C_Correct=sym.getVariable("answer_C_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_c")!=undefined)
{var selected_c=sym.getVariable("selected_c");}
else
{var selected_c=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_c==false)
{selected_c=true;sym.getSymbol("Answer_C").stop("Down");}
else if(selected_c==true)
{selected_c=false;}
sym.setVariable("selected_c",selected_c);sym.getSymbol("Answer_C").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_C").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_c")==true)
{sym.getSymbol("Answer_C").stop("Down");}
else
{sym.getSymbol("Answer_C").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_C_Correct==true){EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_D}","mouseup",function(sym,e){var answer_D_Correct=sym.getVariable("answer_D_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_d")!=undefined)
{var selected_d=sym.getVariable("selected_d");}
else
{var selected_d=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_d==false)
{selected_d=true;sym.getSymbol("Answer_D").stop("Down");}
else if(selected_d==true)
{selected_d=false;}
sym.setVariable("selected_d",selected_d);sym.getSymbol("Answer_D").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_D").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_d")==true)
{sym.getSymbol("Answer_D").stop("Down");}
else
{sym.getSymbol("Answer_D").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_D_Correct==true)
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");;}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_D}","touchend",function(sym,e){var answer_D_Correct=sym.getVariable("answer_D_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_d")!=undefined)
{var selected_d=sym.getVariable("selected_d");}
else
{var selected_d=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_d==false)
{selected_d=true;sym.getSymbol("Answer_D").stop("Down");}
else if(selected_d==true)
{selected_d=false;}
sym.setVariable("selected_d",selected_d);sym.getSymbol("Answer_D").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_D").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_d")==true)
{sym.getSymbol("Answer_D").stop("Down");}
else
{sym.getSymbol("Answer_D").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_D_Correct==true)
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");;}}});
//Edge binding end
})("Question_16_Choices");
//Edge symbol end:'Question_16_Choices'

//=========================================================

//Edge symbol: 'Question_15_Choices_2'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){var numOfDistractors=sym.getVariable("numOfDistractors");sym.setVariable("selected_a",false);sym.setVariable("selected_b",false);sym.setVariable("selected_c",false);sym.setVariable("selected_d",false);if(numOfDistractors==1)
{sym.$("Answer_B").hide();sym.$("Answer_C").hide();sym.$("Answer_D").hide();}
else if(numOfDistractors==2)
{sym.$("Answer_C").hide();sym.$("Answer_D").hide();}
else if(numOfDistractors==3)
{sym.$("Answer_D").hide();}
if(sym.getVariable("multipleAnswers")==true)
{sym.$("_Submit_Button").show();}
else
{sym.$("_Submit_Button").hide();}
sym.getSymbol("Answer_A").stop("Up");sym.getSymbol("Answer_B").stop("Up");sym.getSymbol("Answer_C").stop("Up");sym.getSymbol("Answer_D").stop("Up");sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Continue_BTN}","mouseup",function(sym,e){var questionCtr=sym.getParentSymbol().getVariable("questionCtr");sym.getParentSymbol().stop("Game_Board");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Card").stop("Disabled");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Card").$("cursor").hide();sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Card").$("Card_Trigger").hide();sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Dice").stop("Up");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Dice").$("Cursor").show();sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Dice").$("Dice_Trigger").show();EC.Sound.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Continue_BTN}","touchend",function(sym,e){var questionCtr=sym.getParentSymbol().getVariable("questionCtr");sym.getParentSymbol().stop("Game_Board");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Card").stop("Disabled");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Card").$("cursor").hide();sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Card").$("Card_Trigger").hide();sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Dice").stop("Up");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Dice").$("Cursor").show();sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Dice").$("Dice_Trigger").show();EC.Sound.stop();});
//Edge binding end
Symbol.bindSymbolAction(compId,symbolName,"creationComplete",function(sym,e){sym.setVariable("multipleAnswers",false);sym.setVariable("answer_A_Correct",false);sym.setVariable("answer_B_Correct",false);sym.setVariable("answer_C_Correct",false);sym.setVariable("answer_D_Correct",true);sym.setVariable("numOfDistractors",4);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${__Submit_Button}","mouseup",function(sym,e){var selected_a=sym.getVariable("selected_a");var selected_b=sym.getVariable("selected_b");var selected_c=sym.getVariable("selected_c");var selected_d=sym.getVariable("selected_d");var answer_A_Correct=sym.getVariable("answer_A_Correct");var answer_B_Correct=sym.getVariable("answer_B_Correct");var answer_C_Correct=sym.getVariable("answer_C_Correct");var answer_D_Correct=sym.getVariable("answer_D_Correct");if((selected_a==answer_A_Correct)&&(selected_b==answer_B_Correct)&&(selected_c==answer_C_Correct)&&(selected_d==answer_D_Correct))
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}
sym.$("_Submit_Button").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_A}","mouseup",function(sym,e){var answer_A_Correct=sym.getVariable("answer_A_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_a")!=undefined)
{var selected_a=sym.getVariable("selected_a");}
else
{var selected_a=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_a==false)
{selected_a=true;sym.getSymbol("Answer_A").stop("Down");}
else if(selected_a==true)
{selected_a=false;}
sym.setVariable("selected_a",selected_a);sym.getSymbol("Answer_A").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_A").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_a")==true)
{sym.getSymbol("Answer_A").stop("Down");}
else
{sym.getSymbol("Answer_A").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_A_Correct==true)
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_A}","touchend",function(sym,e){var answer_A_Correct=sym.getVariable("answer_A_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_a")!=undefined)
{var selected_a=sym.getVariable("selected_a");}
else
{var selected_a=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_a==false)
{selected_a=true;sym.getSymbol("Answer_A").stop("Down");}
else if(selected_a==true)
{selected_a=false;}
sym.setVariable("selected_a",selected_a);sym.getSymbol("Answer_A").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_A").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_a")==true)
{sym.getSymbol("Answer_A").stop("Down");}
else
{sym.getSymbol("Answer_A").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_A_Correct==true)
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_B}","mouseup",function(sym,e){var answer_B_Correct=sym.getVariable("answer_B_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_b")!=undefined)
{var selected_b=sym.getVariable("selected_b");}
else
{var selected_b=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_b==false)
{selected_b=true;sym.getSymbol("Answer_B").stop("Down");}
else if(selected_b==true)
{selected_b=false;}
sym.setVariable("selected_b",selected_b);sym.getSymbol("Answer_B").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_B").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_b")==true)
{sym.getSymbol("Answer_B").stop("Down");}
else
{sym.getSymbol("Answer_B").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_B_Correct==true)
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_B}","touchend",function(sym,e){var answer_B_Correct=sym.getVariable("answer_B_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_b")!=undefined)
{var selected_b=sym.getVariable("selected_b");}
else
{var selected_b=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_b==false)
{selected_b=true;sym.getSymbol("Answer_B").stop("Down");}
else if(selected_b==true)
{selected_b=false;}
sym.setVariable("selected_b",selected_b);sym.getSymbol("Answer_B").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_B").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_b")==true)
{sym.getSymbol("Answer_B").stop("Down");}
else
{sym.getSymbol("Answer_B").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_B_Correct==true)
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_C}","mouseup",function(sym,e){var answer_C_Correct=sym.getVariable("answer_C_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_c")!=undefined)
{var selected_c=sym.getVariable("selected_c");}
else
{var selected_c=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_c==false)
{selected_c=true;sym.getSymbol("Answer_C").stop("Down");}
else if(selected_c==true)
{selected_c=false;}
sym.setVariable("selected_c",selected_c);sym.getSymbol("Answer_C").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_C").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_c")==true)
{sym.getSymbol("Answer_C").stop("Down");}
else
{sym.getSymbol("Answer_C").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_C_Correct==true){EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_C}","touchend",function(sym,e){var answer_C_Correct=sym.getVariable("answer_C_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_c")!=undefined)
{var selected_c=sym.getVariable("selected_c");}
else
{var selected_c=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_c==false)
{selected_c=true;sym.getSymbol("Answer_C").stop("Down");}
else if(selected_c==true)
{selected_c=false;}
sym.setVariable("selected_c",selected_c);sym.getSymbol("Answer_C").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_C").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_c")==true)
{sym.getSymbol("Answer_C").stop("Down");}
else
{sym.getSymbol("Answer_C").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_C_Correct==true){EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_D}","mouseup",function(sym,e){var answer_D_Correct=sym.getVariable("answer_D_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_d")!=undefined)
{var selected_d=sym.getVariable("selected_d");}
else
{var selected_d=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_d==false)
{selected_d=true;sym.getSymbol("Answer_D").stop("Down");}
else if(selected_d==true)
{selected_d=false;}
sym.setVariable("selected_d",selected_d);sym.getSymbol("Answer_D").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_D").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_d")==true)
{sym.getSymbol("Answer_D").stop("Down");}
else
{sym.getSymbol("Answer_D").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_D_Correct==true)
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");;}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_D}","touchend",function(sym,e){var answer_D_Correct=sym.getVariable("answer_D_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_d")!=undefined)
{var selected_d=sym.getVariable("selected_d");}
else
{var selected_d=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_d==false)
{selected_d=true;sym.getSymbol("Answer_D").stop("Down");}
else if(selected_d==true)
{selected_d=false;}
sym.setVariable("selected_d",selected_d);sym.getSymbol("Answer_D").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_D").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_d")==true)
{sym.getSymbol("Answer_D").stop("Down");}
else
{sym.getSymbol("Answer_D").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_D_Correct==true)
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");;}}});
//Edge binding end
})("Question_17_Choices");
//Edge symbol end:'Question_17_Choices'

//=========================================================

//Edge symbol: 'Question_15_Choices_3'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){var numOfDistractors=sym.getVariable("numOfDistractors");sym.setVariable("selected_a",false);sym.setVariable("selected_b",false);sym.setVariable("selected_c",false);sym.setVariable("selected_d",false);if(numOfDistractors==1)
{sym.$("Answer_B").hide();sym.$("Answer_C").hide();sym.$("Answer_D").hide();}
else if(numOfDistractors==2)
{sym.$("Answer_C").hide();sym.$("Answer_D").hide();}
else if(numOfDistractors==3)
{sym.$("Answer_D").hide();}
if(sym.getVariable("multipleAnswers")==true)
{sym.$("_Submit_Button").show();}
else
{sym.$("_Submit_Button").hide();}
sym.getSymbol("Answer_A").stop("Up");sym.getSymbol("Answer_B").stop("Up");sym.getSymbol("Answer_C").stop("Up");sym.getSymbol("Answer_D").stop("Up");sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Continue_BTN}","mouseup",function(sym,e){var questionCtr=sym.getParentSymbol().getVariable("questionCtr");sym.getParentSymbol().stop("Game_Board");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Card").stop("Disabled");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Card").$("cursor").hide();sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Card").$("Card_Trigger").hide();sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Dice").stop("Up");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Dice").$("Cursor").show();sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Dice").$("Dice_Trigger").show();EC.Sound.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Continue_BTN}","touchend",function(sym,e){var questionCtr=sym.getParentSymbol().getVariable("questionCtr");sym.getParentSymbol().stop("Game_Board");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Card").stop("Disabled");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Card").$("cursor").hide();sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Card").$("Card_Trigger").hide();sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Dice").stop("Up");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Dice").$("Cursor").show();sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Dice").$("Dice_Trigger").show();EC.Sound.stop();});
//Edge binding end
Symbol.bindSymbolAction(compId,symbolName,"creationComplete",function(sym,e){sym.setVariable("multipleAnswers",false);sym.setVariable("answer_A_Correct",false);sym.setVariable("answer_B_Correct",false);sym.setVariable("answer_C_Correct",false);sym.setVariable("answer_D_Correct",true);sym.setVariable("numOfDistractors",4);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${__Submit_Button}","mouseup",function(sym,e){var selected_a=sym.getVariable("selected_a");var selected_b=sym.getVariable("selected_b");var selected_c=sym.getVariable("selected_c");var selected_d=sym.getVariable("selected_d");var answer_A_Correct=sym.getVariable("answer_A_Correct");var answer_B_Correct=sym.getVariable("answer_B_Correct");var answer_C_Correct=sym.getVariable("answer_C_Correct");var answer_D_Correct=sym.getVariable("answer_D_Correct");if((selected_a==answer_A_Correct)&&(selected_b==answer_B_Correct)&&(selected_c==answer_C_Correct)&&(selected_d==answer_D_Correct))
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}
sym.$("_Submit_Button").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_A}","mouseup",function(sym,e){var answer_A_Correct=sym.getVariable("answer_A_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_a")!=undefined)
{var selected_a=sym.getVariable("selected_a");}
else
{var selected_a=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_a==false)
{selected_a=true;sym.getSymbol("Answer_A").stop("Down");}
else if(selected_a==true)
{selected_a=false;}
sym.setVariable("selected_a",selected_a);sym.getSymbol("Answer_A").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_A").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_a")==true)
{sym.getSymbol("Answer_A").stop("Down");}
else
{sym.getSymbol("Answer_A").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_A_Correct==true)
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_A}","touchend",function(sym,e){var answer_A_Correct=sym.getVariable("answer_A_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_a")!=undefined)
{var selected_a=sym.getVariable("selected_a");}
else
{var selected_a=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_a==false)
{selected_a=true;sym.getSymbol("Answer_A").stop("Down");}
else if(selected_a==true)
{selected_a=false;}
sym.setVariable("selected_a",selected_a);sym.getSymbol("Answer_A").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_A").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_a")==true)
{sym.getSymbol("Answer_A").stop("Down");}
else
{sym.getSymbol("Answer_A").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_A_Correct==true)
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_B}","mouseup",function(sym,e){var answer_B_Correct=sym.getVariable("answer_B_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_b")!=undefined)
{var selected_b=sym.getVariable("selected_b");}
else
{var selected_b=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_b==false)
{selected_b=true;sym.getSymbol("Answer_B").stop("Down");}
else if(selected_b==true)
{selected_b=false;}
sym.setVariable("selected_b",selected_b);sym.getSymbol("Answer_B").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_B").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_b")==true)
{sym.getSymbol("Answer_B").stop("Down");}
else
{sym.getSymbol("Answer_B").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_B_Correct==true)
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_B}","touchend",function(sym,e){var answer_B_Correct=sym.getVariable("answer_B_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_b")!=undefined)
{var selected_b=sym.getVariable("selected_b");}
else
{var selected_b=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_b==false)
{selected_b=true;sym.getSymbol("Answer_B").stop("Down");}
else if(selected_b==true)
{selected_b=false;}
sym.setVariable("selected_b",selected_b);sym.getSymbol("Answer_B").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_B").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_b")==true)
{sym.getSymbol("Answer_B").stop("Down");}
else
{sym.getSymbol("Answer_B").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_B_Correct==true)
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_C}","mouseup",function(sym,e){var answer_C_Correct=sym.getVariable("answer_C_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_c")!=undefined)
{var selected_c=sym.getVariable("selected_c");}
else
{var selected_c=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_c==false)
{selected_c=true;sym.getSymbol("Answer_C").stop("Down");}
else if(selected_c==true)
{selected_c=false;}
sym.setVariable("selected_c",selected_c);sym.getSymbol("Answer_C").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_C").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_c")==true)
{sym.getSymbol("Answer_C").stop("Down");}
else
{sym.getSymbol("Answer_C").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_C_Correct==true){EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_C}","touchend",function(sym,e){var answer_C_Correct=sym.getVariable("answer_C_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_c")!=undefined)
{var selected_c=sym.getVariable("selected_c");}
else
{var selected_c=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_c==false)
{selected_c=true;sym.getSymbol("Answer_C").stop("Down");}
else if(selected_c==true)
{selected_c=false;}
sym.setVariable("selected_c",selected_c);sym.getSymbol("Answer_C").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_C").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_c")==true)
{sym.getSymbol("Answer_C").stop("Down");}
else
{sym.getSymbol("Answer_C").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_C_Correct==true){EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_D}","mouseup",function(sym,e){var answer_D_Correct=sym.getVariable("answer_D_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_d")!=undefined)
{var selected_d=sym.getVariable("selected_d");}
else
{var selected_d=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_d==false)
{selected_d=true;sym.getSymbol("Answer_D").stop("Down");}
else if(selected_d==true)
{selected_d=false;}
sym.setVariable("selected_d",selected_d);sym.getSymbol("Answer_D").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_D").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_d")==true)
{sym.getSymbol("Answer_D").stop("Down");}
else
{sym.getSymbol("Answer_D").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_D_Correct==true)
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");;}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_D}","touchend",function(sym,e){var answer_D_Correct=sym.getVariable("answer_D_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_d")!=undefined)
{var selected_d=sym.getVariable("selected_d");}
else
{var selected_d=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_d==false)
{selected_d=true;sym.getSymbol("Answer_D").stop("Down");}
else if(selected_d==true)
{selected_d=false;}
sym.setVariable("selected_d",selected_d);sym.getSymbol("Answer_D").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_D").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_d")==true)
{sym.getSymbol("Answer_D").stop("Down");}
else
{sym.getSymbol("Answer_D").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_D_Correct==true)
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");;}}});
//Edge binding end
})("Question_18_Choices");
//Edge symbol end:'Question_18_Choices'

//=========================================================

//Edge symbol: 'Question_15_Choices_4'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){var numOfDistractors=sym.getVariable("numOfDistractors");sym.setVariable("selected_a",false);sym.setVariable("selected_b",false);sym.setVariable("selected_c",false);sym.setVariable("selected_d",false);if(numOfDistractors==1)
{sym.$("Answer_B").hide();sym.$("Answer_C").hide();sym.$("Answer_D").hide();}
else if(numOfDistractors==2)
{sym.$("Answer_C").hide();sym.$("Answer_D").hide();}
else if(numOfDistractors==3)
{sym.$("Answer_D").hide();}
if(sym.getVariable("multipleAnswers")==true)
{sym.$("_Submit_Button").show();}
else
{sym.$("_Submit_Button").hide();}
sym.getSymbol("Answer_A").stop("Up");sym.getSymbol("Answer_B").stop("Up");sym.getSymbol("Answer_C").stop("Up");sym.getSymbol("Answer_D").stop("Up");sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Continue_BTN}","mouseup",function(sym,e){var questionCtr=sym.getParentSymbol().getVariable("questionCtr");sym.getParentSymbol().stop("Game_Board");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Card").stop("Disabled");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Card").$("cursor").hide();sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Card").$("Card_Trigger").hide();sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Dice").stop("Up");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Dice").$("Cursor").show();sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Dice").$("Dice_Trigger").show();EC.Sound.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Continue_BTN}","touchend",function(sym,e){var questionCtr=sym.getParentSymbol().getVariable("questionCtr");sym.getParentSymbol().stop("Game_Board");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Card").stop("Disabled");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Card").$("cursor").hide();sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Card").$("Card_Trigger").hide();sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Dice").stop("Up");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Dice").$("Cursor").show();sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Dice").$("Dice_Trigger").show();EC.Sound.stop();});
//Edge binding end
Symbol.bindSymbolAction(compId,symbolName,"creationComplete",function(sym,e){sym.setVariable("multipleAnswers",false);sym.setVariable("answer_A_Correct",false);sym.setVariable("answer_B_Correct",false);sym.setVariable("answer_C_Correct",false);sym.setVariable("answer_D_Correct",true);sym.setVariable("numOfDistractors",4);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${__Submit_Button}","mouseup",function(sym,e){var selected_a=sym.getVariable("selected_a");var selected_b=sym.getVariable("selected_b");var selected_c=sym.getVariable("selected_c");var selected_d=sym.getVariable("selected_d");var answer_A_Correct=sym.getVariable("answer_A_Correct");var answer_B_Correct=sym.getVariable("answer_B_Correct");var answer_C_Correct=sym.getVariable("answer_C_Correct");var answer_D_Correct=sym.getVariable("answer_D_Correct");if((selected_a==answer_A_Correct)&&(selected_b==answer_B_Correct)&&(selected_c==answer_C_Correct)&&(selected_d==answer_D_Correct))
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}
sym.$("_Submit_Button").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_A}","mouseup",function(sym,e){var answer_A_Correct=sym.getVariable("answer_A_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_a")!=undefined)
{var selected_a=sym.getVariable("selected_a");}
else
{var selected_a=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_a==false)
{selected_a=true;sym.getSymbol("Answer_A").stop("Down");}
else if(selected_a==true)
{selected_a=false;}
sym.setVariable("selected_a",selected_a);sym.getSymbol("Answer_A").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_A").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_a")==true)
{sym.getSymbol("Answer_A").stop("Down");}
else
{sym.getSymbol("Answer_A").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_A_Correct==true)
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_A}","touchend",function(sym,e){var answer_A_Correct=sym.getVariable("answer_A_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_a")!=undefined)
{var selected_a=sym.getVariable("selected_a");}
else
{var selected_a=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_a==false)
{selected_a=true;sym.getSymbol("Answer_A").stop("Down");}
else if(selected_a==true)
{selected_a=false;}
sym.setVariable("selected_a",selected_a);sym.getSymbol("Answer_A").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_A").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_a")==true)
{sym.getSymbol("Answer_A").stop("Down");}
else
{sym.getSymbol("Answer_A").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_A_Correct==true)
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_B}","mouseup",function(sym,e){var answer_B_Correct=sym.getVariable("answer_B_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_b")!=undefined)
{var selected_b=sym.getVariable("selected_b");}
else
{var selected_b=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_b==false)
{selected_b=true;sym.getSymbol("Answer_B").stop("Down");}
else if(selected_b==true)
{selected_b=false;}
sym.setVariable("selected_b",selected_b);sym.getSymbol("Answer_B").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_B").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_b")==true)
{sym.getSymbol("Answer_B").stop("Down");}
else
{sym.getSymbol("Answer_B").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_B_Correct==true)
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_B}","touchend",function(sym,e){var answer_B_Correct=sym.getVariable("answer_B_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_b")!=undefined)
{var selected_b=sym.getVariable("selected_b");}
else
{var selected_b=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_b==false)
{selected_b=true;sym.getSymbol("Answer_B").stop("Down");}
else if(selected_b==true)
{selected_b=false;}
sym.setVariable("selected_b",selected_b);sym.getSymbol("Answer_B").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_B").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_b")==true)
{sym.getSymbol("Answer_B").stop("Down");}
else
{sym.getSymbol("Answer_B").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_B_Correct==true)
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_C}","mouseup",function(sym,e){var answer_C_Correct=sym.getVariable("answer_C_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_c")!=undefined)
{var selected_c=sym.getVariable("selected_c");}
else
{var selected_c=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_c==false)
{selected_c=true;sym.getSymbol("Answer_C").stop("Down");}
else if(selected_c==true)
{selected_c=false;}
sym.setVariable("selected_c",selected_c);sym.getSymbol("Answer_C").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_C").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_c")==true)
{sym.getSymbol("Answer_C").stop("Down");}
else
{sym.getSymbol("Answer_C").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_C_Correct==true){EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_C}","touchend",function(sym,e){var answer_C_Correct=sym.getVariable("answer_C_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_c")!=undefined)
{var selected_c=sym.getVariable("selected_c");}
else
{var selected_c=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_c==false)
{selected_c=true;sym.getSymbol("Answer_C").stop("Down");}
else if(selected_c==true)
{selected_c=false;}
sym.setVariable("selected_c",selected_c);sym.getSymbol("Answer_C").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_C").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_c")==true)
{sym.getSymbol("Answer_C").stop("Down");}
else
{sym.getSymbol("Answer_C").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_C_Correct==true){EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_D}","mouseup",function(sym,e){var answer_D_Correct=sym.getVariable("answer_D_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_d")!=undefined)
{var selected_d=sym.getVariable("selected_d");}
else
{var selected_d=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_d==false)
{selected_d=true;sym.getSymbol("Answer_D").stop("Down");}
else if(selected_d==true)
{selected_d=false;}
sym.setVariable("selected_d",selected_d);sym.getSymbol("Answer_D").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_D").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_d")==true)
{sym.getSymbol("Answer_D").stop("Down");}
else
{sym.getSymbol("Answer_D").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_D_Correct==true)
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");;}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_D}","touchend",function(sym,e){var answer_D_Correct=sym.getVariable("answer_D_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_d")!=undefined)
{var selected_d=sym.getVariable("selected_d");}
else
{var selected_d=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_d==false)
{selected_d=true;sym.getSymbol("Answer_D").stop("Down");}
else if(selected_d==true)
{selected_d=false;}
sym.setVariable("selected_d",selected_d);sym.getSymbol("Answer_D").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_D").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_d")==true)
{sym.getSymbol("Answer_D").stop("Down");}
else
{sym.getSymbol("Answer_D").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_D_Correct==true)
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");;}}});
//Edge binding end
})("Question_19_Choices");
//Edge symbol end:'Question_19_Choices'

//=========================================================

//Edge symbol: 'Question_19_Choices_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){var numOfDistractors=sym.getVariable("numOfDistractors");sym.setVariable("selected_a",false);sym.setVariable("selected_b",false);sym.setVariable("selected_c",false);sym.setVariable("selected_d",false);if(numOfDistractors==1)
{sym.$("Answer_B").hide();sym.$("Answer_C").hide();sym.$("Answer_D").hide();}
else if(numOfDistractors==2)
{sym.$("Answer_C").hide();sym.$("Answer_D").hide();}
else if(numOfDistractors==3)
{sym.$("Answer_D").hide();}
if(sym.getVariable("multipleAnswers")==true)
{sym.$("_Submit_Button").show();}
else
{sym.$("_Submit_Button").hide();}
sym.getSymbol("Answer_A").stop("Up");sym.getSymbol("Answer_B").stop("Up");sym.getSymbol("Answer_C").stop("Up");sym.getSymbol("Answer_D").stop("Up");sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Continue_BTN}","mouseup",function(sym,e){var questionCtr=sym.getParentSymbol().getVariable("questionCtr");sym.getParentSymbol().stop("Game_Board");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Card").stop("Disabled");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Card").$("cursor").hide();sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Card").$("Card_Trigger").hide();sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Dice").stop("Up");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Dice").$("Cursor").show();sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Dice").$("Dice_Trigger").show();EC.Sound.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Continue_BTN}","touchend",function(sym,e){var questionCtr=sym.getParentSymbol().getVariable("questionCtr");sym.getParentSymbol().stop("Game_Board");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Card").stop("Disabled");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Card").$("cursor").hide();sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Card").$("Card_Trigger").hide();sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Dice").stop("Up");sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Dice").$("Cursor").show();sym.getParentSymbol().getSymbol("Game_Board").getSymbol("Dice").$("Dice_Trigger").show();EC.Sound.stop();});
//Edge binding end
Symbol.bindSymbolAction(compId,symbolName,"creationComplete",function(sym,e){sym.setVariable("multipleAnswers",false);sym.setVariable("answer_A_Correct",false);sym.setVariable("answer_B_Correct",false);sym.setVariable("answer_C_Correct",false);sym.setVariable("answer_D_Correct",true);sym.setVariable("numOfDistractors",4);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${__Submit_Button}","mouseup",function(sym,e){var selected_a=sym.getVariable("selected_a");var selected_b=sym.getVariable("selected_b");var selected_c=sym.getVariable("selected_c");var selected_d=sym.getVariable("selected_d");var answer_A_Correct=sym.getVariable("answer_A_Correct");var answer_B_Correct=sym.getVariable("answer_B_Correct");var answer_C_Correct=sym.getVariable("answer_C_Correct");var answer_D_Correct=sym.getVariable("answer_D_Correct");if((selected_a==answer_A_Correct)&&(selected_b==answer_B_Correct)&&(selected_c==answer_C_Correct)&&(selected_d==answer_D_Correct))
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}
sym.$("_Submit_Button").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_A}","mouseup",function(sym,e){var answer_A_Correct=sym.getVariable("answer_A_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_a")!=undefined)
{var selected_a=sym.getVariable("selected_a");}
else
{var selected_a=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_a==false)
{selected_a=true;sym.getSymbol("Answer_A").stop("Down");}
else if(selected_a==true)
{selected_a=false;}
sym.setVariable("selected_a",selected_a);sym.getSymbol("Answer_A").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_A").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_a")==true)
{sym.getSymbol("Answer_A").stop("Down");}
else
{sym.getSymbol("Answer_A").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_A_Correct==true)
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_A}","touchend",function(sym,e){var answer_A_Correct=sym.getVariable("answer_A_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_a")!=undefined)
{var selected_a=sym.getVariable("selected_a");}
else
{var selected_a=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_a==false)
{selected_a=true;sym.getSymbol("Answer_A").stop("Down");}
else if(selected_a==true)
{selected_a=false;}
sym.setVariable("selected_a",selected_a);sym.getSymbol("Answer_A").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_A").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_a")==true)
{sym.getSymbol("Answer_A").stop("Down");}
else
{sym.getSymbol("Answer_A").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_A_Correct==true)
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_B}","mouseup",function(sym,e){var answer_B_Correct=sym.getVariable("answer_B_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_b")!=undefined)
{var selected_b=sym.getVariable("selected_b");}
else
{var selected_b=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_b==false)
{selected_b=true;sym.getSymbol("Answer_B").stop("Down");}
else if(selected_b==true)
{selected_b=false;}
sym.setVariable("selected_b",selected_b);sym.getSymbol("Answer_B").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_B").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_b")==true)
{sym.getSymbol("Answer_B").stop("Down");}
else
{sym.getSymbol("Answer_B").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_B_Correct==true)
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_B}","touchend",function(sym,e){var answer_B_Correct=sym.getVariable("answer_B_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_b")!=undefined)
{var selected_b=sym.getVariable("selected_b");}
else
{var selected_b=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_b==false)
{selected_b=true;sym.getSymbol("Answer_B").stop("Down");}
else if(selected_b==true)
{selected_b=false;}
sym.setVariable("selected_b",selected_b);sym.getSymbol("Answer_B").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_B").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_b")==true)
{sym.getSymbol("Answer_B").stop("Down");}
else
{sym.getSymbol("Answer_B").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_B_Correct==true)
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_C}","mouseup",function(sym,e){var answer_C_Correct=sym.getVariable("answer_C_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_c")!=undefined)
{var selected_c=sym.getVariable("selected_c");}
else
{var selected_c=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_c==false)
{selected_c=true;sym.getSymbol("Answer_C").stop("Down");}
else if(selected_c==true)
{selected_c=false;}
sym.setVariable("selected_c",selected_c);sym.getSymbol("Answer_C").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_C").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_c")==true)
{sym.getSymbol("Answer_C").stop("Down");}
else
{sym.getSymbol("Answer_C").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_C_Correct==true){EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_C}","touchend",function(sym,e){var answer_C_Correct=sym.getVariable("answer_C_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_c")!=undefined)
{var selected_c=sym.getVariable("selected_c");}
else
{var selected_c=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_c==false)
{selected_c=true;sym.getSymbol("Answer_C").stop("Down");}
else if(selected_c==true)
{selected_c=false;}
sym.setVariable("selected_c",selected_c);sym.getSymbol("Answer_C").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_C").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_c")==true)
{sym.getSymbol("Answer_C").stop("Down");}
else
{sym.getSymbol("Answer_C").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_C_Correct==true){EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_D}","mouseup",function(sym,e){var answer_D_Correct=sym.getVariable("answer_D_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_d")!=undefined)
{var selected_d=sym.getVariable("selected_d");}
else
{var selected_d=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_d==false)
{selected_d=true;sym.getSymbol("Answer_D").stop("Down");}
else if(selected_d==true)
{selected_d=false;}
sym.setVariable("selected_d",selected_d);sym.getSymbol("Answer_D").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_D").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_d")==true)
{sym.getSymbol("Answer_D").stop("Down");}
else
{sym.getSymbol("Answer_D").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_D_Correct==true)
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");;}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_D}","touchend",function(sym,e){var answer_D_Correct=sym.getVariable("answer_D_Correct");var multipleAnswers=sym.getVariable("multipleAnswers");if(sym.getVariable("selected_d")!=undefined)
{var selected_d=sym.getVariable("selected_d");}
else
{var selected_d=sym.getParentSymbol().getVariable("selected");}
if(multipleAnswers==true)
{if(selected_d==false)
{selected_d=true;sym.getSymbol("Answer_D").stop("Down");}
else if(selected_d==true)
{selected_d=false;}
sym.setVariable("selected_d",selected_d);sym.getSymbol("Answer_D").$("Answer_Trigger").unbind("mouseout");sym.getSymbol("Answer_D").$("Answer_Trigger").mouseout(function(){mouseout_btn();});function mouseout_btn()
{if(sym.getVariable("selected_d")==true)
{sym.getSymbol("Answer_D").stop("Down");}
else
{sym.getSymbol("Answer_D").stop("Up");}}}
else if(multipleAnswers==false)
{if(answer_D_Correct==true)
{EC.Sound.play("correct");sym.stop("Correct");var score=sym.getParentSymbol().getVariable("score");var addScore=sym.getParentSymbol().getVariable("addScore");if(addScore==300||addScore==500||addScore==100)
{score+=addScore;}
else if(addScore==2)
{score*=addScore;}
else
{score=0;}
sym.getParentSymbol().$("score_txt").html(score);sym.getParentSymbol().setVariable("score",score);}
else
{EC.Sound.play("incorrect");sym.stop("Incorrect");;}}});
//Edge binding end
})("Question_20_Choices");
//Edge symbol end:'Question_20_Choices'

//=========================================================

//Edge symbol: '_Question_15_Answer_A_1'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseover",function(sym,e){EC.Sound.play("hover");sym.stop("Over");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mousedown",function(sym,e){sym.stop("Down");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseup",function(sym,e){sym.stop("Over");EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseout",function(sym,e){sym.stop("Up");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchend",function(sym,e){EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchstart",function(sym,e){sym.stop("Down");});
//Edge binding end
})("_Question_16_Answer_A");
//Edge symbol end:'_Question_16_Answer_A'

//=========================================================

//Edge symbol: '_Question_15_Answer_A_2'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseover",function(sym,e){EC.Sound.play("hover");sym.stop("Over");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mousedown",function(sym,e){sym.stop("Down");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseup",function(sym,e){sym.stop("Over");EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseout",function(sym,e){sym.stop("Up");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchend",function(sym,e){EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchstart",function(sym,e){sym.stop("Down");});
//Edge binding end
})("_Question_17_Answer_A");
//Edge symbol end:'_Question_17_Answer_A'

//=========================================================

//Edge symbol: '_Question_15_Answer_A_3'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseover",function(sym,e){EC.Sound.play("hover");sym.stop("Over");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mousedown",function(sym,e){sym.stop("Down");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseup",function(sym,e){sym.stop("Over");EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseout",function(sym,e){sym.stop("Up");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchend",function(sym,e){EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchstart",function(sym,e){sym.stop("Down");});
//Edge binding end
})("_Question_18_Answer_A");
//Edge symbol end:'_Question_18_Answer_A'

//=========================================================

//Edge symbol: '_Question_15_Answer_A_4'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseover",function(sym,e){EC.Sound.play("hover");sym.stop("Over");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mousedown",function(sym,e){sym.stop("Down");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseup",function(sym,e){sym.stop("Over");EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseout",function(sym,e){sym.stop("Up");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchend",function(sym,e){EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchstart",function(sym,e){sym.stop("Down");});
//Edge binding end
})("_Question_19_Answer_A");
//Edge symbol end:'_Question_19_Answer_A'

//=========================================================

//Edge symbol: '_Question_15_Answer_A_5'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseover",function(sym,e){EC.Sound.play("hover");sym.stop("Over");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mousedown",function(sym,e){sym.stop("Down");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseup",function(sym,e){sym.stop("Over");EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseout",function(sym,e){sym.stop("Up");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchend",function(sym,e){EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchstart",function(sym,e){sym.stop("Down");});
//Edge binding end
})("_Question_20_Answer_A");
//Edge symbol end:'_Question_20_Answer_A'

//=========================================================

//Edge symbol: '_Question_15_Answer_B_1'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseover",function(sym,e){EC.Sound.play("hover");sym.stop("Over");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mousedown",function(sym,e){sym.stop("Down");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseup",function(sym,e){sym.stop("Over");EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseout",function(sym,e){sym.stop("Up");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchend",function(sym,e){EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchstart",function(sym,e){sym.stop("Down");});
//Edge binding end
})("_Question_16_Answer_B");
//Edge symbol end:'_Question_16_Answer_B'

//=========================================================

//Edge symbol: '_Question_15_Answer_B_2'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseover",function(sym,e){EC.Sound.play("hover");sym.stop("Over");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mousedown",function(sym,e){sym.stop("Down");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseup",function(sym,e){sym.stop("Over");EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseout",function(sym,e){sym.stop("Up");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchend",function(sym,e){EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchstart",function(sym,e){sym.stop("Down");});
//Edge binding end
})("_Question_17_Answer_B");
//Edge symbol end:'_Question_17_Answer_B'

//=========================================================

//Edge symbol: '_Question_15_Answer_B_3'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseover",function(sym,e){EC.Sound.play("hover");sym.stop("Over");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mousedown",function(sym,e){sym.stop("Down");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseup",function(sym,e){sym.stop("Over");EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseout",function(sym,e){sym.stop("Up");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchend",function(sym,e){EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchstart",function(sym,e){sym.stop("Down");});
//Edge binding end
})("_Question_18_Answer_B");
//Edge symbol end:'_Question_18_Answer_B'

//=========================================================

//Edge symbol: '_Question_15_Answer_B_4'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseover",function(sym,e){EC.Sound.play("hover");sym.stop("Over");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mousedown",function(sym,e){sym.stop("Down");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseup",function(sym,e){sym.stop("Over");EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseout",function(sym,e){sym.stop("Up");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchend",function(sym,e){EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchstart",function(sym,e){sym.stop("Down");});
//Edge binding end
})("_Question_19_Answer_B");
//Edge symbol end:'_Question_19_Answer_B'

//=========================================================

//Edge symbol: '_Question_15_Answer_B_5'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseover",function(sym,e){EC.Sound.play("hover");sym.stop("Over");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mousedown",function(sym,e){sym.stop("Down");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseup",function(sym,e){sym.stop("Over");EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseout",function(sym,e){sym.stop("Up");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchend",function(sym,e){EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchstart",function(sym,e){sym.stop("Down");});
//Edge binding end
})("_Question_20_Answer_B");
//Edge symbol end:'_Question_20_Answer_B'

//=========================================================

//Edge symbol: '_Question_15_Answer_C_1'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseover",function(sym,e){EC.Sound.play("hover");sym.stop("Over");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mousedown",function(sym,e){sym.stop("Down");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseup",function(sym,e){sym.stop("Over");EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseout",function(sym,e){sym.stop("Up");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchend",function(sym,e){EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchstart",function(sym,e){sym.stop("Down");});
//Edge binding end
})("_Question_16_Answer_C");
//Edge symbol end:'_Question_16_Answer_C'

//=========================================================

//Edge symbol: '_Question_15_Answer_C_2'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseover",function(sym,e){EC.Sound.play("hover");sym.stop("Over");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mousedown",function(sym,e){sym.stop("Down");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseup",function(sym,e){sym.stop("Over");EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseout",function(sym,e){sym.stop("Up");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchend",function(sym,e){EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchstart",function(sym,e){sym.stop("Down");});
//Edge binding end
})("_Question_17_Answer_C");
//Edge symbol end:'_Question_17_Answer_C'

//=========================================================

//Edge symbol: '_Question_15_Answer_C_3'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseover",function(sym,e){EC.Sound.play("hover");sym.stop("Over");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mousedown",function(sym,e){sym.stop("Down");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseup",function(sym,e){sym.stop("Over");EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseout",function(sym,e){sym.stop("Up");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchend",function(sym,e){EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchstart",function(sym,e){sym.stop("Down");});
//Edge binding end
})("_Question_18_Answer_C");
//Edge symbol end:'_Question_18_Answer_C'

//=========================================================

//Edge symbol: '_Question_15_Answer_C_4'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseover",function(sym,e){EC.Sound.play("hover");sym.stop("Over");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mousedown",function(sym,e){sym.stop("Down");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseup",function(sym,e){sym.stop("Over");EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseout",function(sym,e){sym.stop("Up");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchend",function(sym,e){EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchstart",function(sym,e){sym.stop("Down");});
//Edge binding end
})("_Question_19_Answer_C");
//Edge symbol end:'_Question_19_Answer_C'

//=========================================================

//Edge symbol: '_Question_15_Answer_C_5'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseover",function(sym,e){EC.Sound.play("hover");sym.stop("Over");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mousedown",function(sym,e){sym.stop("Down");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseup",function(sym,e){sym.stop("Over");EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseout",function(sym,e){sym.stop("Up");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchend",function(sym,e){EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchstart",function(sym,e){sym.stop("Down");});
//Edge binding end
})("_Question_20_Answer_C");
//Edge symbol end:'_Question_20_Answer_C'

//=========================================================

//Edge symbol: '_Question_15_Answer_D_1'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseover",function(sym,e){EC.Sound.play("hover");sym.stop("Over");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mousedown",function(sym,e){sym.stop("Down");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseup",function(sym,e){sym.stop("Over");EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseout",function(sym,e){sym.stop("Up");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchend",function(sym,e){EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchstart",function(sym,e){sym.stop("Down");});
//Edge binding end
})("_Question_16_Answer_D");
//Edge symbol end:'_Question_16_Answer_D'

//=========================================================

//Edge symbol: '_Question_15_Answer_D_2'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseover",function(sym,e){EC.Sound.play("hover");sym.stop("Over");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mousedown",function(sym,e){sym.stop("Down");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseup",function(sym,e){sym.stop("Over");EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseout",function(sym,e){sym.stop("Up");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchend",function(sym,e){EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchstart",function(sym,e){sym.stop("Down");});
//Edge binding end
})("_Question_17_Answer_D");
//Edge symbol end:'_Question_17_Answer_D'

//=========================================================

//Edge symbol: '_Question_15_Answer_D_3'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseover",function(sym,e){EC.Sound.play("hover");sym.stop("Over");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mousedown",function(sym,e){sym.stop("Down");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseup",function(sym,e){sym.stop("Over");EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseout",function(sym,e){sym.stop("Up");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchend",function(sym,e){EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchstart",function(sym,e){sym.stop("Down");});
//Edge binding end
})("_Question_18_Answer_D");
//Edge symbol end:'_Question_18_Answer_D'

//=========================================================

//Edge symbol: '_Question_15_Answer_D_4'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseover",function(sym,e){EC.Sound.play("hover");sym.stop("Over");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mousedown",function(sym,e){sym.stop("Down");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseup",function(sym,e){sym.stop("Over");EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseout",function(sym,e){sym.stop("Up");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchend",function(sym,e){EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchstart",function(sym,e){sym.stop("Down");});
//Edge binding end
})("_Question_19_Answer_D");
//Edge symbol end:'_Question_19_Answer_D'

//=========================================================

//Edge symbol: '_Question_15_Answer_D_5'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseover",function(sym,e){EC.Sound.play("hover");sym.stop("Over");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mousedown",function(sym,e){sym.stop("Down");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseup",function(sym,e){sym.stop("Over");EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","mouseout",function(sym,e){sym.stop("Up");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchend",function(sym,e){EC.Sound.play("click");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Answer_Trigger}","touchstart",function(sym,e){sym.stop("Down");});
//Edge binding end
})("_Question_20_Answer_D");
//Edge symbol end:'_Question_20_Answer_D'

//=========================================================

//Edge symbol: 'Question_01_Correct_Feedback_1'
(function(symbolName){})("Question_16_Correct_Feedback");
//Edge symbol end:'Question_16_Correct_Feedback'

//=========================================================

//Edge symbol: 'Question_01_Correct_Feedback_2'
(function(symbolName){})("Question_17_Correct_Feedback");
//Edge symbol end:'Question_17_Correct_Feedback'

//=========================================================

//Edge symbol: 'Question_01_Correct_Feedback_3'
(function(symbolName){})("Question_18_Correct_Feedback");
//Edge symbol end:'Question_18_Correct_Feedback'

//=========================================================

//Edge symbol: 'Question_01_Correct_Feedback_4'
(function(symbolName){})("Question_19_Correct_Feedback");
//Edge symbol end:'Question_19_Correct_Feedback'

//=========================================================

//Edge symbol: 'Question_01_Correct_Feedback_5'
(function(symbolName){})("Question_20_Correct_Feedback");
//Edge symbol end:'Question_20_Correct_Feedback'

//=========================================================

//Edge symbol: 'Question_01_Incorrect_Feedback_1'
(function(symbolName){})("Question_16_Incorrect_Feedback");
//Edge symbol end:'Question_16_Incorrect_Feedback'

//=========================================================

//Edge symbol: 'Question_01_Incorrect_Feedback_2'
(function(symbolName){})("Question_17_Incorrect_Feedback");
//Edge symbol end:'Question_17_Incorrect_Feedback'

//=========================================================

//Edge symbol: 'Question_01_Incorrect_Feedback_3'
(function(symbolName){})("Question_18_Incorrect_Feedback");
//Edge symbol end:'Question_18_Incorrect_Feedback'

//=========================================================

//Edge symbol: 'Question_01_Incorrect_Feedback_4'
(function(symbolName){})("Question_19_Incorrect_Feedback");
//Edge symbol end:'Question_19_Incorrect_Feedback'

//=========================================================

//Edge symbol: 'Question_01_Incorrect_Feedback_5'
(function(symbolName){})("Question_20_Incorrect_Feedback");
//Edge symbol end:'Question_20_Incorrect_Feedback'

//=========================================================

//Edge symbol: 'Lose_Points'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Continue_BTN}","mouseup",function(sym,e){var parentSymbol=sym.getParentSymbol().getParentSymbol();sym.getParentSymbol().$("Lose_Points").hide();sym.getParentSymbol().getSymbol("Card").stop("Disabled");sym.getParentSymbol().getSymbol("Card").$("cursor").hide();sym.getParentSymbol().getSymbol("Card").$("Card_Trigger").hide();sym.getParentSymbol().getSymbol("Dice").stop("Up");sym.getParentSymbol().getSymbol("Dice").$("Cursor").show();sym.getParentSymbol().getSymbol("Dice").$("Dice_Trigger").show();EC.Sound.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Continue_BTN}","touchend",function(sym,e){var parentSymbol=sym.getParentSymbol().getParentSymbol();sym.getParentSymbol().$("Lose_Points").hide();sym.getParentSymbol().getSymbol("Card").stop("Disabled");sym.getParentSymbol().getSymbol("Card").$("cursor").hide();sym.getParentSymbol().getSymbol("Card").$("Card_Trigger").hide();sym.getParentSymbol().getSymbol("Dice").stop("Up");sym.getParentSymbol().getSymbol("Dice").$("Cursor").show();sym.getParentSymbol().getSymbol("Dice").$("Dice_Trigger").show();EC.Sound.stop();});
//Edge binding end
})("Lose_Points");
//Edge symbol end:'Lose_Points'
})(jQuery,AdobeEdge,"EDGE-603235930");