import Link from 'next/link'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

const ListLink = (props) => (
  <div className='card'>
    <div className='card-header'>
      <div className='card-title h5'><i className={`icon icon-${props.icon}`}></i> {props.title}
        {props.info && (props.info === 'ok') && (<label className='label label-success'>Ok</label>)}
        {props.info && (props.info !== 'ok') && (<label className='label label-error'>Belum Checkin</label>)}
      </div>
      {
        props.location && (
          <div className='card-subtitle text-gray'>Checkpoint di <strong>{props.location}</strong> pada {props.patroli}</div>
        )
      }
      <div><strong><i className='icon icon-time'></i> {dayjs().to(dayjs(props.time))}</strong></div>
    </div>
    <Link
      as={`/dashboard/${props.module}/detail/${props.id}`}
      href={`/dashboard/dashboard_${props.module}_detail?id=${props.id}&menu=${props.module}&behaviour=detail`}
    >
      <button className="btn btn-transparent">
        <i className="icon icon-arrow-right"></i>
      </button>
    </Link>
  </div>
)

export default ListLink

