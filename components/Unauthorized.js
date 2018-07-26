const Unauthorized = (props) => {
  return (
    <div class="empty">
      {
        (props.type == 'empty') ?
          (
            <div>
              <div class="empty-icon">
                <i class="icon icon-stop"></i>
              </div>
              <p class="empty-title h5">Belum ada data</p>
              <p class="empty-subtitle">Silahkan refresh halaman ini, jika internet bermasalah</p>
              <div class="empty-action">
                <button class="btn btn-primary">Terima kasih</button>
              </div>
            </div>
          )
          :
          (
            <div>
              <div class="empty-icon">
                <i class="icon icon-stop"></i>
              </div>
              <p class="empty-title h5">Anda belum diperkenankan untuk mengakses halaman ini</p>
              <p class="empty-subtitle">Atau halaman ini masih dalam konstruksi</p>
              <div class="empty-action">
                <button class="btn btn-primary">Terima kasih</button>
              </div>
            </div>
          )
      }
    </div>
  )
}

export default Unauthorized


