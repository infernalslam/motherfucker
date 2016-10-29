/*global angular, FileReader, $*/
angular.module('todoApp', ['base64'])
  .controller('TodoListController', function ($base64, $scope) {
    $scope.test = 'Project'
    $scope.data = {}
    $scope.showImage = false
    $scope.showCamera = false
    $scope.pagetitle = 'active'
    var fileSelect = document.createElement('input')
    fileSelect.type = 'file'
    if (fileSelect.disabled) {
      return
    }
    $scope.click = function () {
      fileSelect.click()
    }
    fileSelect.onchange = function () {
      var f = fileSelect.files[0]
      var r = new FileReader()
      r.onloadend = function (e) {
        $scope.data.b64 = e.target.result
        $scope.$apply()
        // console.log($scope.data.b64.replace(/^data:image\/(png|jpg);base64,/, ''))
        // $scope.imageBg = $scope.data.b64.replace(/^data:image\/(png|jpg);base64,/, '')
      }
      r.readAsDataURL(f)
      $scope.showImage = true
    }

    $scope.cameraStyle = []
    $scope.insert = function () {
      var cameraStyle = {
        id: Date.now(),
        css: {
          top: 100,
          left: 100,
          position: 'absolute',
          background: 'rgb(53, 255, 195)',
          width: '1em',
          height: '1em',
          animation: 'ripple 0.7s linear infinite',
          'border-radius': '50%'
        }
      }
      $scope.cameraStyle.push(cameraStyle)
    }

    $scope.moveObj = function (id) {
      $scope.cameraStyle.find(function (item) {
        if (item.id === id) {
          item.css = $('#' + id).position()
        }
      })
    }
    $scope.init = function () {
      $scope.cameraStyle.forEach(function (item) {
        // console.log(item)
        $('#' + item.id).draggable()
        $('#' + item.id).css(item.css)
      })
    }
    // ///////////////// CCTV ////////////////////////
    $scope.raduisStyle = []
    $scope.raduis = function (size) {
      console.log('size', size)
      if (size === 18) {
        var cctvStyle18 = {
          id: Date.now(),
          css: {
            top: 100,
            left: 300,
            position: 'absolute',
            width: '50px',
            height: '150px',
            'background-image': `url('./img/18.png')`,
            'background-repeat': 'repeat-y, repeat-x',
            'transform': 'rotate(0deg)',
            opacity: '0.6'
          }
        }
        $scope.raduisStyle.push(cctvStyle18)
      } else if (size === 28) {
        var cctvStyle28 = {
          id: Date.now(),
          css: {
            top: 100,
            left: 300,
            position: 'absolute',
            width: '67px',
            height: '150px',
            'background-image': `url('./img/28.png')`,
            'background-repeat': 'repeat-y, repeat-x',
            'transform': 'rotate(0deg)',
            opacity: '0.6'
          }
        }
        $scope.raduisStyle.push(cctvStyle28)
      } else if (size === 33.4) {
        var cctvStyle33 = {
          id: Date.now(),
          css: {
            top: 100,
            left: 300,
            position: 'absolute',
            width: '80px',
            height: '150px',
            'background-image': `url('./img/33.4.png')`,
            'background-repeat': 'repeat-y, repeat-x',
            'transform': 'rotate(0deg)',
            opacity: '0.6'
          }
        }
        $scope.raduisStyle.push(cctvStyle33)
      } else if (size === 48) {
        var cctvStyle48 = {
          id: Date.now(),
          css: {
            top: 100,
            left: 300,
            position: 'absolute',
            width: '102px',
            height: '150px',
            'background-image': `url('./img/48.png')`,
            'background-repeat': 'repeat-y, repeat-x',
            'transform': 'rotate(0deg)',
            opacity: '0.6'
          }
        }
        $scope.raduisStyle.push(cctvStyle48)
      } else if (size === 150) {
        var cctvStyle150 = {
          id: Date.now(),
          css: {
            top: 100,
            left: 300,
            right: 0,
            bottom: 0,
            'border-style': 'dashed',
            position: 'absolute',
            width: '207px',
            height: '150px',
            'background-image': `url('./img/150.png')`,
            'background-repeat': 'repeat-y, repeat-x',
            'transform': 'rotate(0deg)',
            opacity: '0.6'
          }
        }
        $scope.raduisStyle.push(cctvStyle150)
      } else if (size === 70.6) {
        var cctvStyle70 = {
          id: Date.now(),
          css: {
            top: 100,
            left: 300,
            position: 'absolute',
            width: '147px',
            height: '150px',
            'background-image': `url('./img/70.6.png')`,
            'background-repeat': 'repeat-y, repeat-x',
            'transform': 'rotate(0deg)',
            opacity: '0.6'
          }
        }
        $scope.raduisStyle.push(cctvStyle70)
      } else if (size === 80) {
        var cctvStyle80 = {
          id: Date.now(),
          css: {
            top: 100,
            left: 300,
            position: 'absolute',
            width: '166px',
            height: '150px',
            'background-image': `url('./img/80.png')`,
            'background-repeat': 'repeat-y, repeat-x',
            'transform': 'rotate(0deg)',
            opacity: '0.6'
          }
        }
        $scope.raduisStyle.push(cctvStyle80)
      }
    }

    $scope.moveObjraduisStyle = function (id) {
      $scope.raduisStyle.find(function (item) {
        if (item.id === id) {
          item.css.top = $('#' + id).position().top
          item.css.left = $('#' + id).position().left
        }
      })
    }
    $scope.initraduisStyle = function () {
      $scope.raduisStyle[$scope.idCctv].css.transform = 'rotate(' + $scope.range + 'deg)'
      // $scope.raduisStyle[$scope.idCctv].css.width = $scope.width + 'px'
      // $scope.raduisStyle[$scope.idCctv].css.height = $scope.raduisStyle[$scope.idCctv].css.width.replace(/(\d * )(px) /g, '$1') /2 + 'px'
      $scope.raduisStyle.forEach(function (item, index) {
        $('#' + item.id).draggable()
        $('#' + item.id).css(item.css)
      })
      // $scope.countCctv = $scope.raduisStyle.length
    }
    // $scope.range = 0
    // $scope.width = 0
    $scope.showRange = false
    $scope.idCctv = 0
    $scope.tranformcctv = function (id) {
      console.log($scope.idCctv)
      var index = $scope.raduisStyle.findIndex(item => item.id === id)
      console.log(index)
      $scope.idCctv = index
      $scope.showRange = true
      $scope.range = 0
      // var index = $scope.raduisStyle.findIndex(item => item.id === id)
    //   var rotate = $scope.raduisStyle[index].css.transform.replace(/(rotate\()(\d*)(deg\))/g, '$2')
    //   var width = $scope.raduisStyle[index].css.width.replace(/(\d*)(px)/g, '$1')
    //   $scope.range = rotate
    //   $scope.width = width
      // $scope.idCctv = index
    }
    $scope.delcctv = function (id) {
      var index = $scope.raduisStyle.findIndex(item => item.id === id)
      $scope.raduisStyle.splice(index, 1)
      console.log($scope.raduisStyle)
    }
    $scope.page = ''
    $scope.Bullet = function () {
      console.log('Bullet')
      $scope.page = 'Bullet'
      $scope.raduis(150)
    }
    $scope.Box = function () {
      $scope.page = 'Box'
    }
    $scope.Dome = function () {
      $scope.page = 'Dome'
    }
    $scope.testLens = function () {
      $scope.pagetitle = 'modal'
    }
  })
