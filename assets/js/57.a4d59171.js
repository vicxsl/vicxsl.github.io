(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{602:function(s,n,t){"use strict";t.r(n);var e=t(16),a=Object(e.a)({},(function(){var s=this,n=s.$createElement,t=s._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("信号和槽是PyQt编程对象之间进行通信的机制。每个继承自QWideget的控件都支持信号与槽机制。信号发射时（发送请求），连接的槽函数就会自动执行（针对请求进行处理）。本文主要讲述信号和槽最基本、最经常使用方法。就是内置信号和槽的使用的使用方法。")]),s._v(" "),t("h1",{attrs:{id:"内置信号和槽"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#内置信号和槽"}},[s._v("#")]),s._v(" 内置信号和槽")]),s._v(" "),t("p",[s._v("所谓内置信号与槽的使用。是指在发射信号时，使用窗口控件的函数，而不是自定义的函数。信号与槽的连接方法是通过QObject.signal.connect将一个QObject的信号连接到另一个QObject的槽函数。")]),s._v(" "),t("p",[s._v("在任何GUI设计中，按钮都是最重要的和常用的触发动作请求的方式，用来与用户进行交互操作。常见的按钮包括QPushButton、QRadioButton和QCheckBox。这些按钮都继承自QAbstractButton类，QAbstractButton提供的信号包括：")]),s._v(" "),t("p",[t("strong",[s._v("Clicked")]),s._v("：鼠标左键点击按钮并释放触发该信号。最常用。记住这个就差不多够了。")]),s._v(" "),t("p",[s._v("Pressed：鼠标左键按下时触发该信号")]),s._v(" "),t("p",[s._v("Released：鼠标左键释放时触发该信号")]),s._v(" "),t("p",[s._v("Toggled：控件标记状态发生改变时触发该信号。")]),s._v(" "),t("h1",{attrs:{id:"内置信号和槽使用实例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#内置信号和槽使用实例"}},[s._v("#")]),s._v(" 内置信号和槽使用实例")]),s._v(" "),t("p",[s._v("这里实现一个点击按钮退出界面需求实现过程来介绍内置信号和槽。开始动手。。。")]),s._v(" "),t("p",[s._v("Step1：打开Qt Designer，选择Widget模板。在工具箱中拖动Push Button控件按钮到主界面。并修改控件显示名称。保存为singal.ui。界面如下：")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://img2018.cnblogs.com/blog/774327/201908/774327-20190801073058089-477620333.png",alt:"img"}})]),s._v(" "),t("p",[s._v("Step2：使用pyuic5 -o singal.py singal.ui转换成.py格式。")]),s._v(" "),t("p",[s._v("Step3：为考虑介绍方便，将调用程序在singal.py中主程序。其中MyMainForm类中的命令行为Push Button按钮点击信号添加槽函数。如下")]),s._v(" "),t("p",[t("strong",[s._v("self.pushButton.clicked.connect(self.close)")])]),s._v(" "),t("p",[s._v("完整代码如下（可直接拷贝运行，字体加粗部分为添加部分）：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('# -*- coding: utf-8 -*-\n\n# Form implementation generated from reading ui file \'signal.ui\'\n#\n# Created by: PyQt5 UI code generator 5.11.3\n#\n# WARNING! All changes made in this file will be lost!\n\nimport sys\nfrom PyQt5 import QtCore, QtGui, QtWidgets\nfrom PyQt5.QtWidgets import QApplication, QMainWindow, QMessageBox\n\nclass Ui_Form(object):\n    def setupUi(self, Form):\n        Form.setObjectName("Form")\n        Form.resize(431, 166)\n        self.pushButton = QtWidgets.QPushButton(Form)\n        self.pushButton.setGeometry(QtCore.QRect(160, 50, 91, 41))\n        font = QtGui.QFont()\n        font.setFamily("YaHei Consolas Hybrid")\n        font.setPointSize(14)\n        self.pushButton.setFont(font)\n        self.pushButton.setObjectName("pushButton")\n\n        self.retranslateUi(Form)\n        QtCore.QMetaObject.connectSlotsByName(Form)\n\n    def retranslateUi(self, Form):\n        _translate = QtCore.QCoreApplication.translate\n        Form.setWindowTitle(_translate("Form", "信号与槽"))\n        self.pushButton.setText(_translate("Form", "关闭"))\n\nclass MyMainForm(QMainWindow, Ui_Form):\n    def __init__(self, parent=None):\n        super(MyMainForm, self).__init__(parent)\n        self.setupUi(self)\n        self.pushButton.clicked.connect(self.close)\n\nif __name__ == "__main__":\n    app = QApplication(sys.argv)\n    myWin = MyMainForm()\n    myWin.show()\n    sys.exit(app.exec_())\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br")])]),t("p",[s._v("运行并点击如下按钮就可以关闭窗口")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://img2018.cnblogs.com/blog/774327/201907/774327-20190731075157107-545802423.png",alt:"img"}})]),s._v(" "),t("h1",{attrs:{id:"内置信号和自定义槽使用实例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#内置信号和自定义槽使用实例"}},[s._v("#")]),s._v(" 内置信号和自定义槽使用实例")]),s._v(" "),t("p",[s._v("实现过程同上述步骤一样。槽函数showMsg为自定义函数。")]),s._v(" "),t("p",[s._v("信号与槽："),t("strong",[s._v("self.pushButton.clicked.connect(self.showMsg)")])]),s._v(" "),t("p",[s._v("完整代码如下（可直接拷贝运行，字体加粗部分为添加部分）：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('# -*- coding: utf-8 -*-\n\n# Form implementation generated from reading ui file \'signal.ui\'\n#\n# Created by: PyQt5 UI code generator 5.11.3\n#\n# WARNING! All changes made in this file will be lost!\nimport sys\nfrom PyQt5 import QtCore, QtGui, QtWidgets\nfrom PyQt5.QtWidgets import QApplication, QMainWindow, QMessageBox\n\nclass Ui_Form(object):\n    def setupUi(self, Form):\n        Form.setObjectName("Form")\n        Form.resize(431, 166)\n        self.pushButton = QtWidgets.QPushButton(Form)\n        self.pushButton.setGeometry(QtCore.QRect(160, 50, 91, 41))\n        font = QtGui.QFont()\n        font.setFamily("YaHei Consolas Hybrid")\n        font.setPointSize(14)\n        self.pushButton.setFont(font)\n        self.pushButton.setObjectName("pushButton")\n\n        self.retranslateUi(Form)\n        QtCore.QMetaObject.connectSlotsByName(Form)\n\n    def retranslateUi(self, Form):\n        _translate = QtCore.QCoreApplication.translate\n        Form.setWindowTitle(_translate("Form", "信号与槽"))\n        self.pushButton.setText(_translate("Form", "运行"))\n\nclass MyMainForm(QMainWindow, Ui_Form):\n    def __init__(self, parent=None):\n        super(MyMainForm, self).__init__(parent)\n        self.setupUi(self)\n        self.pushButton.clicked.connect(self.showMsg)\n\n    def showMsg(self):\n        QMessageBox.information(self, "信息提示框", "OK,内置信号与自定义槽函数！")\n\nif __name__ == "__main__":\n    app = QApplication(sys.argv)\n    myWin = MyMainForm()\n    myWin.show()\n    sys.exit(app.exec_())\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br")])]),t("p",[s._v("运行结果如下：")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://img2018.cnblogs.com/blog/774327/201907/774327-20190731074646624-796827969.png",alt:"img"}})]),s._v(" "),t("h1",{attrs:{id:"qt-designer添加控件信号与槽"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#qt-designer添加控件信号与槽"}},[s._v("#")]),s._v(" Qt Designer添加控件信号与槽")]),s._v(" "),t("p",[s._v("上述介绍的内容是通过代码方式实现内置信号与槽的连接。那Qt Designer工具可以实现信号与槽的连接？之前在第二节课Qt Designer主界面介绍时提过信号槽区域。一直没有讲如何使用。通过这个区域功能是可以实现信号与槽的连接的。")]),s._v(" "),t("p",[s._v("还是以添加内置信号与槽来介绍。")]),s._v(" "),t("p",[s._v("Step1：打开Qt Designer界面，找到信号槽编辑区。如下")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://img2018.cnblogs.com/blog/774327/201908/774327-20190801074858994-2021158042.png",alt:"img"}})]),s._v(" "),t("p",[s._v('Step2：点击+号 Sender控件选择"PushButton"、Signal信号选择"clicked"，Receiver选择"Form"，内置槽函数选择"close()"')]),s._v(" "),t("p",[t("img",{attrs:{src:"http://img2018.cnblogs.com/blog/774327/201908/774327-20190801074953985-1210211538.png",alt:"img"}})]),s._v(" "),t("p",[s._v("Step3：保存.ui格式，并使用pyuic转换成.py格式，添加调用程序，运行。效果一样。这些步骤都介绍过，不再重复介绍，关键代码如下：")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://img2018.cnblogs.com/blog/774327/201908/774327-20190801075327732-1487709.png",alt:"img"}})]),s._v(" "),t("h1",{attrs:{id:"信号与槽的另一种连接方法-pyqtslot"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#信号与槽的另一种连接方法-pyqtslot"}},[s._v("#")]),s._v(" 信号与槽的另一种连接方法：@pyqtSlot()")]),s._v(" "),t("p",[t("strong",[s._v("@pyqtSlot()")])]),s._v(" "),t("p",[t("code",[s._v("@pyqtSlot()")]),s._v("有两种使用情况。如下面两个例子。")]),s._v(" "),t("p",[s._v("例子1：一个信号时，如"),t("code",[s._v("pushButton")]),s._v(" 的"),t("code",[s._v("clicked")]),s._v("，即按钮的点击信号")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("# 需要引入 pyqtSlot 库函数\nfrom PyQt5.QtCore import pyqtSlot\n12\n# 信号与槽函数\n@pyqtSlot()\ndef on_pushButton_clicked(self):\n\tprint('点击了按钮')\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v("代码说明：")]),s._v(" "),t("blockquote",[t("p",[t("code",[s._v("@pyqtSlot()")]),s._v("是这种方式的修饰关键词，他表明下面函数是信号槽函数\n由于没有connect来初始化，在初始化函数中，没有说明是那个控件信号的关键词。\n"),t("strong",[s._v("所以，在@pyqtSlot()方式里，函数名称有特殊要求")]),s._v(" "),t("strong",[s._v("on_(控件对象名)_信号名(self,内置参数)")]),s._v(" "),t("strong",[s._v("内置参数可以缺省")])])]),s._v(" "),t("p",[s._v("例子2：一个控件多个信号时，如名为"),t("code",[s._v("self.lineEdit_2")]),s._v("的"),t("code",[s._v("QlineEdit")]),s._v("控件的"),t("code",[s._v("returnPressed")]),s._v("和"),t("code",[s._v("textChanged")]),s._v("信号")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("@pyqtSlot()\ndef on_lineEdit_2_returnPressed(self):\n\tprint('触发了信号 returnPressed')\n\ndef on_lineEdit_2_textChanged(self):\n\tprint('触发了信号 textChanged')\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("代码说明：一个控件同时要写多个信号与槽函数时，"),t("strong",[s._v("只需要写一遍")]),t("code",[s._v("@pyqtSlot()")]),s._v("关键词，中间可以有其他函数隔开。")]),s._v(" "),t("p",[t("strong",[s._v("注意")]),s._v("是一个控件只写一遍"),t("code",[s._v("@pyqtSlot()")]),s._v("，"),t("strong",[s._v("不是")]),s._v("所有控件信号只写一次"),t("code",[s._v("@pyqtSlot()")]),s._v("，有多少控件的信号还是要写。")]),s._v(" "),t("p",[t("strong",[s._v("如果")]),s._v("多个控件信号只写一次"),t("code",[s._v("@pyqtSlot()")]),s._v("，"),t("strong",[s._v("有时会发生非常诡异的事情")]),s._v("😄")]),s._v(" "),t("p",[s._v("注：完整的例子代码是在一个类中，所以有关键字"),t("code",[s._v("self")])]),s._v(" "),t("p",[t("strong",[t("code",[s._v("@pyqtSlot()")]),s._v("优点是方式书写比较简洁。缺点是但函数名称不能自由定义，在想自定义参数时没有详细说明。")])]),s._v(" "),t("h1",{attrs:{id:"小结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[s._v("#")]),s._v(" 小结")]),s._v(" "),t("p",[s._v("本文介绍了PyQt5信号与槽最基本的使用方法。知道如何在Qt Designer生成的.py文件中添加控件信号与槽的关系并且知道如何调用自定义槽函数。掌握了这些，应该就可以动手实现一些基本的需求了。")]),s._v(" "),t("p",[s._v("到这里，按照这几个章节的介绍应该可以动手完成简单需求的实现。至于更进一步的学习，可以通过实践过程中遇到的问题以及小工具开发需求去驱动加深理解可能效果会好一点。")])])}),[],!1,null,null,null);n.default=a.exports}}]);