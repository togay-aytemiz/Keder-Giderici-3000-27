import "./styles.css";

import Header from "./components/Header";
import ActivityCard from "./components/ActivityCard";
// import placeHolderData from "./data/placeHolderData";
import { useEffect, useState } from "react";

export default function App() {
  /* Challenge

    Kullanıcının etkinlikleri Bored API için key olarak kaydedildi. Göreviniz, etkinlik verilerini almak için key'leri aşağıdaki gibi kullanmaktır: 
    
        1. Sayfa yüklendiğinde, aşağıdaki savedActivityKeys array'inde bulunan 20 key'in her biri için Bored API'den aktivite verileri alınmalıdır. Bu veri getirme işlemlerinin nasıl yapılacağını öğrenmek için API_Documentation.md dosyasını okuyun. 
        
        2. Veriler, activities state array'e 20 JavaScript nesnesi (her key/response/activity için bir tane) olarak kaydedilmelidir.  
           
        3. Şu anda activitiesData state olarak ayarlanmış olan placeHolderData'dan kurtulun. Bu veri sadece size gerçek verinin içeriği, biçimi ve faydası hakkında bir fikir vermek içindir. Sonunda, üzerinde API'den gerçek veriler bulunan 20 etkinlik kartı elde etmelisiniz. 
        
    Not: Tek yapmanız gereken activitiesData state'ini yukarıda açıklanan şekilde ayarlamaktır. Bunu doğru bir şekilde yaparsanız, aşağıdaki 33. satırda yer alan activityCardElements değişkeni etkinlik kartlarını sizin için oluşturacaktır. 
*/

  const savedActivityKeys = [
    8364626, 4688012, 6553978, 3699502, 9908721, 3136729, 5490351, 8827573,
    9318514, 1668223, 3192099, 9008639, 4894697, 8033599, 5675880, 7114122,
    4151544, 4558850, 3561421, 4286250,
  ];

  const [activitiesData, setActivitiesData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getActivities = async () => {
      let activitiesArr = [];
      for (let i = 0; i < savedActivityKeys.length; i++) {
        const key = savedActivityKeys[i];
        const response = await fetch(
          `https://www.boredapi.com/api/activity?key=${key}`
        );
        const data = await response.json();
        activitiesArr = [...activitiesArr, data];
      }
      setActivitiesData(activitiesArr);
      setIsLoading(false);
    };

    getActivities();
  }, []);

  // placeHolderData, data klasöründeki placeHolderData.js dosyasından içe aktarılmıştır.

  const activityCardElements = activitiesData.map((activityData, index) => {
    const { key, ...otherProps } = activityData;
    return <ActivityCard key={key} number={index + 1} {...otherProps} />;
  });

  return (
    <div className="wrapper">
      <Header isLoading={isLoading} />

      {!isLoading && <div className="container">{activityCardElements}</div>}
    </div>
  );
}
