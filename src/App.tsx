
import DatePicker, { CalendarContainer } from 'react-datepicker';
import InputMask from 'react-input-mask';
//import moment from 'moment';
import { InputNumber } from 'antd';
import 'react-datepicker/dist/react-datepicker.css';
import React, { useState } from 'react';
import 'antd/dist/antd.css';
import State from "./state"
import { observer } from "mobx-react-lite"

interface LayoutProps {
  children?: any;
  className?: any;
}

const App = observer(() => {
  console.log(State.value1)
  const MyContainer: React.FC<LayoutProps> = ({ className, children }) => {
    return (
      <div style={{ padding: "16px", background: "#216ba5", color: "#fff" }}>
        <CalendarContainer className={className}>
          <div style={{ background: "#f0f0f0" }}>
            ВЫберите дату
          </div>
          <div style={{ position: "relative" }}>{children}</div>
          <div style={{ background: "#f0f0f0" }}>
            <input type="number" defaultValue={State.value.getHours()} className='ant-input-number' onClick={(e) => {
              let state1 = State.value1;
              if (state1 === undefined) {
                //state1 = moment();
                // console.log(state1)
                // 
              } else {
                console.log(state1, 'тут')
                console.log((e.target as HTMLInputElement).value)
                state1.setHours(+(e.target as HTMLInputElement).value)
                State.setValue1(state1)
              }
            }}/> 
            <input type="number" defaultValue={State.value.getSeconds()} className='ant-input-number' />
            <input type="number" defaultValue={State.value.getSeconds()} className='ant-input-number' />
          </div>
          <button onClick={() => {
            // console.log(State.value, 'State.value');
            // console.log(moment(State.value1), 'State.value1');
            State.setValue(State.value1)
            console.log(State.value1)
            console.log(State.value)
            console.log(State.value.toDate())
          }}>Выбрать</button>
        </CalendarContainer>
      </div>
    );
  };

  return (
    <div>
      <button onClick={() => {
        State.setValue3()
        console.log(State.value3)
      }}>{State.value3}</button>
      <DatePicker
        //showTimeInput
        // //showYearPicker
        open={true}
        // value={State.value.format("DD.MM.yyyy HH:mm:ss")}
        calendarContainer={MyContainer}
        dateFormat="dd.MM.yyyy HH:mm:ss"
        selected={State.value}
        onChange={(date) => {
          //console.log(date)
          // if (date !== null) {
          //   State.setValue(date)
          // }
          // console.log(moment(date)
          // State.setValue1(moment(date))
        }}
        // onSelect={(e) => {
        //   //console.log(moment(e).toDate())
        //    if (e !== null) {
        //     //  State.setValue1(moment(e).toDate)
        //   }
        // }}
        // onChangeRaw={(e) => {
        //   // if (e.target.value !== undefined) {
        //   //   let value = e.target.value.replace(/[^0-9]/g, "")
        //   //   if (value.length === 14) {
        //   //     if (moment(e.target.value).isValid() === true) {
        //   //       alert('Хорошая дата')
        //   //     }
        //   //   }
        //   // }

        // }}
        //timeInputLabel="Установить текущую дату и время:" {}
        customInput={<InputMask mask="99.99.9999 99:99:99" alwaysShowMask={true} />}
      />
    </div>
  );
})

// function observer(App() {
//   const [startDate, setStartDate] = useState(new Date());

  
// })
//идеально 

export default App