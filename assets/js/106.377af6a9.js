(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{544:function(t,n,a){"use strict";a.r(n);var e=a(16),s=function(t){t.options.__data__block__={markmap_1a96284d:'# MyBatis\n* ORM `（Object Relational Mapping）`\n\t- 对象关系映射：`是一种为了解决关系型数据库数据与简单Java对象（POJO）的映射关系的技术。`\n\t- Hibernate属于全自动ORM映射工具\n- 解决JDBC编程的问题\n\t- 简化数据库链接创建、释放：在mybatis-config.xml中配置数据链接池。\n\t- Sql语句写在代码中造成代码不易维护：将Sql语句配置在XXXXmapper.xml文件中\n\t- 向sql语句传参数麻烦，需要占位符：Mybatis自动将java对象映射至sql语句\n\t- 对结果集解析麻烦：Mybatis自动将sql执行结果映射至java对象\n- 优点\n\t- 基于SQL语句编程灵活，兼容数据库设计语法\n\t- 减少编写JDBC的代码量\n\t- 与各种数据库兼容\n\t- 对应字段关系好维护\n\t- 继承Spring方便\n- 缺点\n\t- SQL语句的编写工作量大\n\t- SQL语句的语法依赖数据库\n- Hibernate 和 MyBatis 的区别\n\t- 都是对jdbc的封装，都是持久层的框架\n\t- 映射关系\n\t\t- MyBatis 是一个半自动映射的框架，`配置Java对象与sql语句执行结果的对应关系，多表关联关系配置简单`\n\t\t- Hibernate 是一个全表映射的框架，`配置Java对象与数据库表的对应关系，多表关联关系配置复杂`\n\t- SQL优化和移植性\n\t\t- Hibernate 对SQL语句封装，代码量少，Mybatis需要编写SQL多\n\t\t- Hibernate 提供级联等特性，比MyBatis强大\n\t\t- Hibernate 会多消耗性能\n\t\t- Hibernate SQL语句优化困难，Mybatis可以优化SQL性能\n- MyBatis连接步骤\n\t- 创建SqlSessionFactory\n\t- 通过SqlSessionFactory创建SqlSession\n\t- 通过sqlsession执行数据库操作\n\t- 调用session.commit()提交事务\n\t- 调用session.close()关闭会话\n- 工作原理\n\t- 读取MyBatis的全局配置文件（mybatis-config.xml ）\n\t- 加载SQL映射文件 `SQL语句`\n\t- 构造会话工厂（SqlSessionFactory）\n\t- 创建会话对象（SqlSession对象）\n\t- 动态地生成需要执行的 SQL 语句（Executor 执行器）\n\t\t- 参数映射信息的封装（MappedStatement）\n\t- 输入参数映射\n\t- 输出结果映射\n- 使用\n\t- 映射器\n\t\t- #{}\n\t\t\t- 占位符，预编译处理\n\t\t\t- 调用PreparedStatement的set方法来赋值\n\t\t\t- 变量自动加上单引号 ‘’\n\t\t\t- 可以有效的防止SQL注入\n\t\t- ${}\n\t\t\t- 是拼接符，字符串替换，没有预编译处理\n\t\t\t- 变量不会加上单引号 ‘’\n\t- 标签\n\t\t- 基本的select | insert | updae | delete\n\t\t- <if>\n\t\t- <foreach>标签`批量批量操作`\n\t\t\t- item 迭代时的别名\n\t\t\t- index  迭代到的位置\n\t\t\t- open 表示语句以什么开始，常用“("\n\t\t\t- separator 迭代之间的分隔符号\n\t\t\t- close  表示以什么结束，常用“)”\n\t\t- <resultMap>`映射字段名和实体类属性名`\n\t\t\t- property为实体类属性名\n\t\t\t- column为数据库表中的属性\n\t\t- <parameterMap> `参数`\n\t\t- <sql> `sql片段`\n\t\t- <include>`引入sql片段`\n\t\t- trim | where | set | foreach|if | choose | when | otherwise | bind `动态SQL`'}},i=Object(e.a)({},(function(){var t=this.$createElement,n=this._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[n("h1",{attrs:{id:"mybatis"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mybatis"}},[this._v("#")]),this._v(" MyBatis")]),this._v(" "),n("Markmap",{attrs:{id:"markmap_1a96284d",code:this.$dataBlock.markmap_1a96284d}})],1)}),[],!1,null,null,null);"function"==typeof s&&s(i);n.default=i.exports}}]);