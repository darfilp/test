import { makeAutoObservable, observable, computed, action, flow } from "mobx"
//import moment from 'moment';

export default class State {
    public static value: any = new Date();
    public static value1: any = new Date();//для календаря
    public static value3: any = 1;//для теста
    constructor(value: any) {
        makeAutoObservable(this)
    }


    public static setValue(item: any) {
        this.value = item;
    }

    public static setValue1(item: any) {
        this.value1 = item;
    }

    public static setValue3() {
        this.value3 = this.value3 + 1;
    }
}

        // onChangeRaw={(e) => {
        //   console.log(e.target.value)
        //   // if (date !== null) {
        //   //   setStartDate(date)
        //   // }
        // }}         customInput={<InputMask mask="99.99.9999 99:99:99" alwaysShowMask={true} value={State.value.format("DD.MM.yyyy HH:mm:ss")} onChange={(e) => {
        //   console.log(e)
        // }}/>} <button onClick={() => {
    //     State.setValue3()
    //     console.log(State.value3)
    //   }}>{State.value3}</button>