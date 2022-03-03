import React from 'react'

export default function CharacterItem({item}) {
  return (
    <div className="card">
        <div className="card-inner">
            <div className="card-front">
                <img src={item.img} alt=''/>
            </div>
            <div className="card-back">
                <h1>{item.name}</h1>
                <ul>
                    <li>
                        <strong>Actor Name:</strong>{item.protrayed}
                    </li>
                    <li>
                        <strong>Nickname:</strong>{item.nickname}
                    </li>
                    <li>
                        <strong>Brithday:</strong>{item.brithday}
                    </li>
                    <li>
                        <strong>Status:</strong>{item.status}
                    </li>
                </ul>
            </div>

        </div>
    </div>
  )
}
