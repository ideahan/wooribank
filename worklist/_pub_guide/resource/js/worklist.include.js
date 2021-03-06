/**
* worklist.include
* --------------------------------------
* @version 2.0.0
* @author Goang
*/


/**
* include
* --------------------------------------
*/

function inc_linkInfo(){
	var linkPath = '../../';
	var str='';
	str+='<h2>Link info.</h2>';
	str+='<table>';
	str+='<caption>Link info</caption>';
	str+='<colgroup>';
	str+='	<col width="110px" />';
	str+='	<col width="auto" />';
	str+='</colgroup>';
	str+='<tbody>';
	str+='	<tr>';
	str+='		<th scope="row">Worklist</th>';
	str+='		<td class="tobe_section">';
	str+='			<div>';
	str+='				<a href="'+linkPath+'index.html" class="btn"><span>Front</span></a>';
	str+='				<a href="'+linkPath+'html/_pub_guide/worklist.guide.html" class="btn"><span>Guide</span></a>';
	// str+='				<a href="'+linkPath+'admin/html/_pub_guide/worklist.guide.html" class="btn"><span>A.Guide</span></a>';
	str+='			</div>';
	str+='		</td>';
	str+='	</tr>';
	str+='	<tr>';
	str+='		<th scope="row">Util</th>';
	str+='		<td class="etc_section">';
	str+='			<div>';
	str+='				<a href="./worklist.addon/data-converter/index.html" class="btn" target="_blank"><span>DataConvert</span></a>';
	str+='				<a href="./worklist.addon/url-encoder-SVG/index.html" class="btn" target="_blank"><span>SvgConvert</span></a>';
	str+='			</div>';
	str+='		</td>';
	str+='	</tr>';
	// str+='	<tr>';
	// str+='		<th scope="row">Ref</th>';
	// str+='		<td class="etc_section">';
	// str+='			<div>';
	// str+='				<a href="https://zentangle.com/" class="btn" target="_blank"><span>Zentangle</span></a>';
	// str+='			</div>';
	// str+='		</td>';
	// str+='	</tr>';
	str+='</tbody>';
	str+='</table>';
	document.write(str);
}


function inc_filter(){
	var str='';
	str+='		<h2>Filter.</h2>';
	str+='		<table width="" summary="퍼블리싱 문서 규격 및 크로스브라우징 관련">';
	str+='		<caption>문서 정보</caption>';
	str+='		<colgroup><col width="110px" /><col width="atuo" /></colgroup>';
	str+='		<tbody>';

	str+='			<tr>';
	str+='				<th rowspan="2"><span class="total_rate">&nbsp;<span></th>';
	str+='				<td class="filterOption">';
	str+='					<p><strong>* Delete :</strong>';
	str+='						<label><input type="radio" name="ch_del" id=del01 value="true"  /> 포함</label>';
	str+='						<label><input type="radio" name="ch_del" id="del02" value="false" checked/> 제외</label>';
	str+='					</p>';
	str+='					<p class="ml10"><strong>* Group :</strong>';
	str+='						<label><input type="radio" name="ch_group" id="gropu01" value="true" checked /> Yes</label>';
	str+='						<label><input type="radio" name="ch_group" id=gropu02 value="false"  /> No</label>';
	str+='					</p>';
	str+='				</td>';
	str+='			</tr>';

	str+='			<tr>';
	str+='				<td class="filter_btn">';
	str+='					<div><a href="javascript:void(0);" class="del btn bullet" title="del"><span>삭제</span></a>';
	str+='					<a href="javascript:void(0);" class="equal btn bullet" title="equal"><span>동일</span></a>';
	str+='					<a href="javascript:void(0);" class="hold btn bullet" title="hold"><span>보류</span></a>';
	str+='					<a href="javascript:void(0);" class="change btn bullet" title="change"><span>수정</span></a>';
	str+='					<a href="javascript:void(0);" class="rework btn bullet" title="rework"><span>재확인</span></a>';
	str+='					<a href="javascript:void(0);" class="layer btn bullet" title="layer"><span>레이어</span></a>';
	str+='					<a href="javascript:void(0);" class="popup btn bullet" title="popup"><span>팝업</span></a>';
	str+='					<a href="javascript:void(0);" class="new btn bullet" title="new"><span>우선</span></a></div>';
	str+='					<a href="javascript:void(0);" class="result btn bullet" title="result"><span>완료</span></a>';
	str+='					<a href="javascript:void(0);" class="result_ex btn bullet" title="result_ex"><span>미완</span></a>';
	str+='					<a href="javascript:void(0);" class="total btn bullet on" title="total"><span>Total</span></a>';
	// str+='					<a href="javascript:void(0);" class="real btn bullet" title="real"><span>삭제제외</span></a>';
	str+='				</td>';
	str+='			</tr>';

	str+='			<tr>';
	str+='				<th><label for="id_search">Search</label></th>';
	str+='				<td class="search">';
	str+='					<input type="text" name="search" value="" id="id_search" placeholder="Search" />';
	str+='				</td>';
	str+='			</tr>';
	str+='		</tbody>';
	str+='		</table>';
	document.write(str);
}

function inc_IAHead(){
	var str='';
	str+='<caption>작업 리스트</caption>';
	str+='<colgroup>';
	str+='	<col width="3%" /><!-- 번호 -->';
	str+='	<col class="depth2" style="width:13%" /><!-- 2Depth -->';
	str+='	<col class="depth3" style="width:14%" /><!-- 3Depth -->';
	str+='	<col class="depth4" style="width:14%" /><!-- 4Depth -->';
	str+='	<col class="page" style="width:11%" /><!-- 화면ID -->';
	str+='	<col class="pid" style="width:11%" /><!-- 메뉴명 -->';
	str+='	<col class="path" style="width:6%" /><!-- 경로 -->';
	str+='	<col class="coder" style="width:4%" /><!-- 개발자 -->';
	str+='	<col class="rdate" style="width:4%" /><!-- 완료일 -->';
	str+='	<col class="mdate" style="width:4%" /><!-- 수정일 -->';
	str+='	<col class="etc" style="width:auto" /><!-- 비고 -->';
	str+='</colgroup>';
	str+='<thead>';
	str+='	<tr>';
	str+='		<th scope="col" class="num">번호</th>';
	str+='		<th scope="col" class="depth2">2Depth</th>';
	str+='		<th scope="col" class="depth3">3Depth</th>';
	str+='		<th scope="col" class="depth4">4Depth</th>';
	str+='		<th scope="col" class="page">화면ID</th>';
	str+='		<th scope="col" class="pid">메뉴명</th>';
	str+='		<th scope="col" class="path">경로</th>';
	str+='		<th scope="col" class="coder">개발자</th>';
	str+='		<th scope="col" class="rdate">완료일</th>';
	str+='		<th scope="col" class="mdate">수정일</th>';
	str+='		<th scope="col" class="etc">비고</th>';
	str+='	</tr>';
	str+='</thead>';
	document.write(str);
}

function inc_IAHead_guide(){
	var str='';
	str+='<caption>작업 리스트</caption>';
	str+='<colgroup>';
	str+='	<col width="3%" /><!-- 번호 -->';
	str+='	<col class="depth2" style="width:13%" /><!-- 2Depth -->';
	str+='	<col class="depth3" style="width:14%" /><!-- 3Depth -->';
	str+='	<col class="depth4" style="width:14%" /><!-- 4Depth -->';
	str+='	<col class="page" style="width:11%" /><!-- 화면ID -->';
	str+='	<col class="pid" style="width:11%" /><!-- 메뉴명 -->';
	str+='	<col class="path" style="width:6%" /><!-- 경로 -->';
	str+='	<col class="coder" style="width:4%" /><!-- 개발자 -->';
	str+='	<col class="rdate" style="width:4%" /><!-- 완료일 -->';
	str+='	<col class="mdate" style="width:4%" /><!-- 수정일 -->';
	str+='	<col class="etc" style="width:auto" /><!-- 비고 -->';
	str+='</colgroup>';
	str+='<thead>';
	str+='	<tr>';
	str+='		<th scope="col" class="num">번호</th>';
	str+='		<th scope="col" class="depth2">2Depth</th>';
	str+='		<th scope="col" class="depth3">3Depth</th>';
	str+='		<th scope="col" class="depth4">4Depth</th>';
	str+='		<th scope="col" class="page">화면ID</th>';
	str+='		<th scope="col" class="pid">메뉴명</th>';
	str+='		<th scope="col" class="path">경로</th>';
	str+='		<th scope="col" class="coder">개발자</th>';
	str+='		<th scope="col" class="rdate">완료일</th>';
	str+='		<th scope="col" class="mdate">수정일</th>';
	str+='		<th scope="col" class="etc">비고</th>';
	str+='	</tr>';
	str+='</thead>';
	document.write(str);
}
