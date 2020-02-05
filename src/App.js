import React, {useState, useCallback} from 'react';
import styled from 'styled-components';
import Draggable from './Draggble';
import './App.css'

const HEIGHT = 80;

const App = () => {
  const items = [1,2,3,4,5,6];
  const [state, setState] = useState({
    order: items,
    dragOrder: items,
    draggedIndex: null
  });
	
  const handleDrag = useCallback(({translation, id}) => {
    const delta = Math.round(translation.y / HEIGHT);
    const index = state.order.indexOf(id);
    const dragOrder = state.order.filter(index => index !== id);
		
    dragOrder.splice(index + delta, 0, id);
		
    setState(state => ({
      ...state,
      draggedIndex: id,
      dragOrder
    }));
  }, [state.order, items.length]);
	
  const handleDragEnd = useCallback(() => {
    setState(state => ({
      ...state,
      order: state.dragOrder,
      draggedIndex: null
    }));
  }, []);
	
  return (
    <div className="card">
       <div>
        <b>The skills you mention here will help hackathon organizers in assessing you as a potential participant</b>
        <section>
        {items.map(index => {
        const isDragging = state.draggedIndex === index;
        const top = state.dragOrder.indexOf(index) * (HEIGHT + 10);
        const draggedTop = state.order.indexOf(index) * (HEIGHT + 10);
				
        return (
          <Draggable
            key={index}
            id={index}
            onDrag={handleDrag}
            onDragEnd={handleDragEnd}>

            <Rect
              isDragging={isDragging}
              top={isDragging ? draggedTop : top}>
             {index}
            </Rect>

          </Draggable>
        );
      })}
        </section>
      </div>
    </div>
  );
};

export default App;

const Rect = styled.div`
  width: 300px;
  user-select: none;
  height: ${HEIGHT}px;
  background:#fff;
  position: absolute;
  transition : all 500ms;
  top: ${({top}) => 100 + top}px;
  font-size: 20px;
  color: #777;
`;