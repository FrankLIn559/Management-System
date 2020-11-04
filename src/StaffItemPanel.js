import React from 'react';
import StaffItem from './StaffItem.js';
export default class StaffItemPanel extends React.Component{
    
	render(){
		//接收ManaageSystem中传来的的rawData
	    let items = [];
		// 在暂无条目的时候给出相应的提示
		if(this.props.items.length == 0) {
		    items.push(<tr><th colSpan="5" className="tempEmpty">暂无用户信息</th></tr>);
		}else {
		    this.props.items.forEach(item => {
				items.push(
					<StaffItem 
							key={item.key}
							item={item} 
							removeStaffItem={this.props.removeStaffItem}
							detailStaffItem={this.props.detailStaffItem}
					/>);
		    });
		}
		
		return (
		  <table className='itemPanel'>
		    <thead>
			    <th className='itemTd'>姓名</th>
				<th className='itemTd'>年龄</th>
				<th className='itemTd'>身份</th>
				<th className='itemTd'>性别</th>
				<th className='itemTd'>操作</th>
			</thead>
		    <tbody>{items}</tbody>
		  </table>
		);
	}
}