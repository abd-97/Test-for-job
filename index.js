const usersG = document.querySelector('.graphic');
const usersP = document.querySelector('.photo');

const hamburger = document.querySelector('.hamburger');
const navLink = document.querySelector('.navbar');

hamburger.addEventListener('click', () => {
  navLink.classList.toggle('hide');
});



const creatCardG = ([img, name, occupation]) => {
  let code = `
    <div class="card">
                <img src="Assets/Users/${img}.png" alt=${name}>
                <p class="occupation">${occupation}</p>
                <p class="name"> ${name} (4.7⭐)</p>
                <div class="category">
                    <div style="display:flex;">
                        <img src="https://img.icons8.com/external-those-icons-flat-those-icons/24/000000/external-Check-interface-those-icons-flat-those-icons-2.png" style="width:10px; height: 10px;"/>
                        <p style="margin-right:5px;">خبرة خمس سنوات</p>
                    </div>
                <div style="display:flex;">
                    <img src="https://img.icons8.com/external-those-icons-flat-those-icons/24/000000/external-Check-interface-those-icons-flat-those-icons-2.png" style="width:10px; height: 10px;"/>
                    <p style="margin-right:5px;">شهادة جامعية بنفس التخصص</p>
                </div>
                <div style="display:flex;">
                    <img src="https://img.icons8.com/external-those-icons-flat-those-icons/24/000000/external-Check-interface-those-icons-flat-those-icons-2.png" style="width:10px; height: 10px;"/>
                    <p style="margin-right:5px;">إمكانية العمل عن بعد</p>
                </div>
                <div style="display:flex;">
                    <img src="https://img.icons8.com/external-those-icons-flat-those-icons/24/000000/external-Check-interface-those-icons-flat-those-icons-2.png" style="width:10px; height: 10px;"/>
                    <p style="margin-right:5px;">معرض اعمال خاص</p>
                </div>
                </div>

            </div>
    `;
  usersG.innerHTML += code;
};

const creatCardP = ([img, name, occupation]) => {
  let code = `
    <div class="card">
                <img src="Assets/Users/${img}.png" alt=${name}>
                <p class="occupation">${occupation}</p>
                <p class="name"> ${name} (4.7⭐)</p>
                <div class="category">
                    <div style="display:flex;">
                        <img src="https://img.icons8.com/external-those-icons-flat-those-icons/24/000000/external-Check-interface-those-icons-flat-those-icons-2.png" style="width:10px; height: 10px;"/>
                        <p style="margin-right:5px;">خبرة خمس سنوات</p>
                    </div>
                <div style="display:flex;">
                    <img src="https://img.icons8.com/external-those-icons-flat-those-icons/24/000000/external-Check-interface-those-icons-flat-those-icons-2.png" style="width:10px; height: 10px;"/>
                    <p style="margin-right:5px;">شهادة جامعية بنفس التخصص</p>
                </div>
                <div style="display:flex;">
                    <img src="https://img.icons8.com/external-those-icons-flat-those-icons/24/000000/external-Check-interface-those-icons-flat-those-icons-2.png" style="width:10px; height: 10px;"/>
                    <p style="margin-right:5px;">إمكانية العمل عن بعد</p>
                </div>
                <div style="display:flex;">
                    <img src="https://img.icons8.com/external-those-icons-flat-those-icons/24/000000/external-Check-interface-those-icons-flat-those-icons-2.png" style="width:10px; height: 10px;"/>
                    <p style="margin-right:5px;">معرض اعمال خاص</p>
                </div>
                </div>

            </div>
    `;
  usersP.innerHTML += code;
};

let u1 = [8, 'سمية عمران عبد الله','مصمم غرافيكي'];
let u2 = [2, 'محمد أحمد سمير', 'تعديل الفيديوهات'];
let u3 = [4, 'عبدالله مصعب حسن', 'موشن غرافيك'];
let u4=  [6, 'جولينا محمد العكيلي','تصميم واجهات المُستخدم'];
let u5 = [3, 'سعدية محسن معيلو', 'تصوير المنتجات'];
let u6 = [1, 'جوليا سمير غانم','التصوير الفوتوغرافي'];
let u7 = [5, 'روبرت كاظم الحيالي','تصحيح الألوان'];
let u8 = [7, 'سحر محمد العبيدي','صناعة الأفلام'];

creatCardG(u1)
creatCardG(u2);
creatCardG(u3);
creatCardG(u4);

creatCardP(u5);
creatCardP(u6);
creatCardP(u7);
creatCardP(u8);

