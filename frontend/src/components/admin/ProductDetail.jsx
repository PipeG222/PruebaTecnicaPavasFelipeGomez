const ProductDetail = ({ producto, onClose }) => {
  if (!producto) return null;

  return (
    <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">

          <div className="modal-header">
            <h5 className="modal-title">Detalles del Producto</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>

          <div className="modal-body">
            <p><strong>Nombre:</strong> {producto.name}</p>
            <p><strong>Descripción:</strong> {producto.description}</p>
            <p><strong>Precio:</strong> ${producto.price}</p>
            <p><strong>Categoría:</strong> {producto.categoria?.name || 'Sin categoría'}</p>
          </div>

          <div className="modal-footer">
            <button className="btn btn-secondary" onClick={onClose}>Cerrar</button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
