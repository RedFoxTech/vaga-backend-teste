package br.com.redfox.dennis.pokemon.filter;

import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

public class Pages implements Pageable {

	private int pageNumber;
	private int pageSize;
	
	
	@Override
	public int getPageNumber() {
		// TODO Auto-generated method stub
		return pageNumber;
	}

	@Override
	public int getPageSize() {
		// TODO Auto-generated method stub
		return pageSize;
	}

	@Override
	public long getOffset() {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public Sort getSort() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Pages next() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Pages previousOrFirst() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Pages first() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean hasPrevious() {
		// TODO Auto-generated method stub
		return false;
	}

	public void setPageNumber(int pageNumber) {
		this.pageNumber = pageNumber;
	}

	public void setPageSize(int pageSize) {
		this.pageSize = pageSize;
	}

	public Pages(int pageNumber, int pageSize) {
		super();
		this.pageNumber = pageNumber;
		this.pageSize = pageSize;
	}

	
	
	
}
