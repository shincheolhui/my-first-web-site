var Body = {
    setBackgroundColor: function (color) {
        document.querySelector('body').style.backgroundColor = color
    },
    setColor: function (color) {
        document.querySelector('body').style.color = color
    }
}

var Links = {
    setColor: function (color) {
        var aList = document.querySelectorAll('a');
        var i = 0;
        while (i < aList.length) {
            aList[i].style.color = color;
            i++;
        }
    }
}

function nightDayHandlerJs(self) {
    var target = document.querySelector('body')
    // this.value로 바로 위에 value를 지정한다.
    if (self.value === 'night6') {
        // target으로 document.querySelector('body')을 지정한다.
        Body.setBackgroundColor('black')
        Body.setColor('white')
        self.value = 'day6'

        Links.setColor('powderblue')

    } else {
        Body.setBackgroundColor('white')
        Body.setColor('black')
        self.value = 'night6'

        Links.setColor('blue')

    }
}