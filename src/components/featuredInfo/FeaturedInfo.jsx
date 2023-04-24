import React from 'react';
import "./featuredInfo.css"
import { ArrowDownward, ArrowUpward } from '@material-ui/icons';

export default function FeaturedInfo() {
  return (
    <div className='featured'>
        <div className='featuredItem'>
            <span className='featuredTitle'>Revenue</span>
            <div className='featurdMoneyContainer'>
                <span className='featuredMoney'>$2114</span>
                <span className='featuredMoneyRate'>-11.23 <ArrowDownward className='featuredIconNeg'/></span>
            </div>
            <span className='featuredSub'>Compared to last month</span>
        </div>
        <div className='featuredItem'>
            <span className='featuredTitle'>Sales</span>
            <div className='featurdMoneyContainer'>
                <span className='featuredMoney'>$2114</span>
                <span className='featuredMoneyRate'>-1.23 <ArrowDownward className='featuredIconNeg'/></span>
            </div>
            <span className='featuredSub'>Compared to last month</span>
        </div>
        <div className='featuredItem'>
            <span className='featuredTitle'>Cost</span>
            <div className='featurdMoneyContainer'>
                <span className='featuredMoney'>$1556</span>
                <span className='featuredMoneyRate'>+3.2 <ArrowUpward className='featuredIconPos'/></span>
            </div>
            <span className='featuredSub'>Compared to last month</span>
        </div>
    </div>
  )
}
