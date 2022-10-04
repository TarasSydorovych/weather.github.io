import React from "react";
class Weather extends React.Component{
    render() {



    return(
        <div className='temper'>

            {!this.props.country &&
                <h2>Для отримання данних вберіть місто на карті</h2>
            }
            {this.props.country &&
                <ul>
                    <li>Країна {this.props.country}</li>
                    <li>Температура повітря {this.props.tempre} градуса</li>
                    <li>Відчувається як {this.props.tempLike} градуса</li>
                    <li>Швидкість вітру {this.props.windSpeed} м/с</li>
                    <li>Тиск {this.props.pressure} bar</li>
                    <li>Схід сонця {this.props.sunrise}</li>
                </ul>
            }




        </div>

    )
}
}
export default Weather