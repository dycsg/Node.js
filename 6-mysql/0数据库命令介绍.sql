安装mysql 命令 npm i mysql

数据库结构：数据库database  -  数据表table  -  数据行row  -  字段field
数据库名称不用有中文，空格一般用下划线 _

查询语句
select * from 表名称                   ：查询整个表的数据
select 列名称 from 表名称                ：查询表的指定字段

插入语句
insert into 表名 (字段名, 字段名) value ('数据', '数据')

更新语句   
需求：把id为 7 的用户密码更新为888   字符串需要加引号
update 表名 set 字段名='888' where id=7  

删除语句
需要：把id为4的这条数据删除    字符串需要加引号
delete from 表名 where id=4
删除整个表
delete from 表名


where条件语句
select * from uname where id>2;       查询大于2的数据
select * from uname where username!='wy';    查询username不等于wy的数据

AND条件语句  和  
表示必须满足多个条件
需求查询status为0的 并且id小于3
select * from uname where status=0 AND id<3;


OR条件语句  或  
表示满足一个条件即可
需求：查询用户名会dyc 或者 status是1的数据
select * from uname whree username='dyc' OR status=1;


排序语句
select * from 表名 order by status asc   升序
select * from 表名 order by id desc      降序
select * from 表名 oredr by status desc, username asc  多重排序


count(*)函数 用于返回表的总数据条数 
select count(*) from 表名
需要把status为0的总条数查询出来
select COUNT(*) from 表名 where status=0
给他设置别名 AS
select count(*) as 别名 from 表名 where status=0